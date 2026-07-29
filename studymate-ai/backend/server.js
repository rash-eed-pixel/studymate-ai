import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import rateLimit from "express-rate-limit";
import pdfParse from "pdf-parse";
import { PDFDocument } from "pdf-lib";
import { GoogleGenAI } from "@google/genai";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Trust reverse proxy (required for hosting platforms like Render, Railway, Vercel)
app.set("trust proxy", 1);

// Standard Middleware
app.use(cors());
app.use(express.json());

// ==========================================
// 1. RATE LIMITERS
// ==========================================

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again in 15 minutes." },
});

const aiStudyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  statusCode: 429,
  message: {
    error: "AI limit reached. You can only generate 10 study materials every 15 minutes.",
  },
});

app.use(globalLimiter);

// Configure Multer for PDF & Image Uploads (25MB Limit)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 },
});

// Initialize Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Multi-model strategy prioritizing gemini-3.5-flash with resilient fallback options
const MODEL_LIST = [
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite"
];

/**
 * Resilient wrapper to call Gemini API with model fallback and retry logic for 503, 429, and 404 errors.
 */
async function callGeminiWithFallback(contents) {
  let lastError = null;

  for (const model of MODEL_LIST) {
    // Retry up to 2 times per model if hit by temporary 503 high demand
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
        });
        return response;
      } catch (err) {
        lastError = err;
        const statusCode = err?.status || err?.code || err?.error?.code;

        // On 503 (High Demand), wait brief moment and retry same model once
        if (statusCode === 503 && attempt === 1) {
          console.warn(`⚠️ Model [${model}] hit 503 High Demand. Retrying in 1.5s...`);
          await new Promise((resolve) => setTimeout(resolve, 1500));
          continue;
        }

        // On 404 (Not Found), 429 (Quota/Rate Limit), or persistent 503, failover to next model
        if (statusCode === 404 || statusCode === 503 || statusCode === 429) {
          console.warn(`⚠️ Model [${model}] unavailable or rate-limited (${statusCode}). Failing over to next model...`);
          break; // Break inner loop, try next model in MODEL_LIST
        }

        // Re-throw any critical client errors (e.g., auth, invalid parameters)
        throw err;
      }
    }
  }

  throw new Error(
    `All AI models are currently overloaded or unavailable. Technical details: ${lastError?.message || "Service Unavailable"}`
  );
}

// ==========================================
// 2. MOUNT EXTERNAL ROUTES
// ==========================================

app.use("/api/auth", authRoutes);

// ==========================================
// 3. HELPER FUNCTIONS
// ==========================================

async function extractPageRange(pdfBuffer, startPage, endPage) {
  const srcDoc = await PDFDocument.load(pdfBuffer);
  const totalPages = srcDoc.getPageCount();

  const start = Math.max(0, (parseInt(startPage) || 1) - 1);
  const end = Math.min(totalPages - 1, (parseInt(endPage) || totalPages) - 1);

  if (start > end) {
    throw new Error(`Invalid page range: start page (${start + 1}) is greater than end page (${end + 1}). Total pages: ${totalPages}`);
  }

  const subDoc = await PDFDocument.create();
  const pageIndices = [];
  for (let i = start; i <= end; i++) pageIndices.push(i);

  const copiedPages = await subDoc.copyPages(srcDoc, pageIndices);
  copiedPages.forEach((page) => subDoc.addPage(page));

  const subDocBytes = await subDoc.save();
  return Buffer.from(subDocBytes);
}

function chunkText(text, maxWordsPerChunk = 1500, overlapWords = 200) {
  const words = text.split(/\s+/);
  if (words.length <= maxWordsPerChunk) return [text];

  const chunks = [];
  let start = 0;

  while (start < words.length) {
    const end = Math.min(start + maxWordsPerChunk, words.length);
    chunks.push(words.slice(start, end).join(" "));
    if (end === words.length) break;
    start += maxWordsPerChunk - overlapWords;
  }

  return chunks;
}

function parseJsonFromMarkdown(rawText) {
  try {
    const cleaned = rawText.replace(/```json/gi, "").replace(/```/g, "").trim();
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error("Failed to parse JSON response from AI model.");
  }
}

function bufferToGenerativePart(buffer, mimeType) {
  return {
    inlineData: {
      data: buffer.toString("base64"),
      mimeType,
    },
  };
}

// ==========================================
// 4. MAIN STUDY & AI ENDPOINT
// ==========================================

app.post(
  "/api/study",
  aiStudyLimiter,
  upload.fields([{ name: "pdf", maxCount: 1 }, { name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      const { type, prompt, startPage, endPage } = req.body;
      let extractedText = "";
      const contentsPayload = [];

      // 1. PDF Processing & Page Range Extraction
      const pdfFile = req.files?.["pdf"]?.[0];
      if (pdfFile) {
        let targetBuffer = pdfFile.buffer;

        if (startPage || endPage) {
          targetBuffer = await extractPageRange(pdfFile.buffer, startPage, endPage);
        }

        const pdfData = await pdfParse(targetBuffer);
        extractedText = pdfData.text;
      }

      // 2. Image Processing (Multimodal)
      const imageFile = req.files?.["image"]?.[0];
      if (imageFile) {
        const imagePart = bufferToGenerativePart(imageFile.buffer, imageFile.mimetype);
        contentsPayload.push(imagePart);
      }

      const combinedText = `${prompt || ""}\n\n${extractedText}`.trim();

      if (!combinedText && !imageFile) {
        return res.status(400).json({ error: "Please enter text, upload an image note, or attach a PDF." });
      }

      // 3. Chunking long text input
      const chunks = chunkText(combinedText || "Analyze the provided image study material.", 1500, 200);

      // 4. AI Feature Handlers
      if (type === "quiz") {
        let allQuestions = [];
        const questionsPerChunk = Math.max(2, Math.floor(10 / chunks.length));

        for (let i = 0; i < chunks.length; i++) {
          const quizPrompt = `Generate ${questionsPerChunk} multiple-choice questions based on this material. Return ONLY a valid JSON array of objects matching this exact structure:
[
  {
    "question": "Question text here",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0
  }
]

Text:
${chunks[i]}`;

          const response = await callGeminiWithFallback([...contentsPayload, quizPrompt]);
          const questions = parseJsonFromMarkdown(response.text);
          if (Array.isArray(questions)) allQuestions.push(...questions);
        }

        return res.json({ quiz: allQuestions });

      } else if (type === "flashcards") {
        let allCards = [];
        const cardsPerChunk = Math.max(3, Math.floor(12 / chunks.length));

        for (let i = 0; i < chunks.length; i++) {
          const cardPrompt = `Generate ${cardsPerChunk} flashcards based on this material. Return ONLY a valid JSON array of objects matching this exact structure:
[
  {
    "front": "Front question/concept",
    "back": "Back explanation/answer"
  }
]

Text:
${chunks[i]}`;

          const response = await callGeminiWithFallback([...contentsPayload, cardPrompt]);
          const cards = parseJsonFromMarkdown(response.text);
          if (Array.isArray(cards)) allCards.push(...cards);
        }

        return res.json({ flashcards: allCards });

      } else if (type === "summarizer") {
        let summaries = [];

        for (let i = 0; i < chunks.length; i++) {
          const sectionHeader = chunks.length > 1 ? `### Section ${i + 1}\n\n` : "";
          const summaryPrompt = `Provide a clear, bulleted summary of key points in this material:\n\n${chunks[i]}`;

          const response = await callGeminiWithFallback([...contentsPayload, summaryPrompt]);
          summaries.push(sectionHeader + response.text);
        }

        return res.json({ result: summaries.join("\n\n---\n\n") });

      } else if (type === "planner") {
        const plannerPrompt = `Create a step-by-step weekly study timeline and action schedule based on this material:\n\n${combinedText}`;

        const response = await callGeminiWithFallback([...contentsPayload, plannerPrompt]);
        return res.json({ result: response.text });

      } else {
        // Default: AI Tutor
        const tutorPrompt = `You are an expert AI Study Partner. Explain the core concepts in simple terms with examples and key takeaways:\n\n${combinedText}`;

        const response = await callGeminiWithFallback([...contentsPayload, tutorPrompt]);
        return res.json({ result: response.text });
      }

    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({ error: error.message || "Internal server error." });
    }
  }
);

// Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", activeModels: MODEL_LIST, time: new Date().toISOString() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🤖 Active fallback model chain: ${MODEL_LIST.join(" -> ")}`);
});