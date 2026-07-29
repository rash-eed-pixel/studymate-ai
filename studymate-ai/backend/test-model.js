import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function check() {
  try {
    const list = await ai.models.list();
    console.log("--- YOUR AVAILABLE GEMINI MODELS ---");
    for await (const m of list) {
      console.log(m.name);
    }
  } catch (err) {
    console.error("Failed to fetch models:", err.message);
  }
}

check();