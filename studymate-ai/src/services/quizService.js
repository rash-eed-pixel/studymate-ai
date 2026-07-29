const WEBHOOK_URL = "http://localhost:5678/webhook/quiz-generator";
export async function generateQuiz(payload) {
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();

  
  console.log("Raw response from n8n:", text);

  if (!response.ok) {
    throw new Error(text || "Quiz generation failed.");
  }

  return JSON.parse(text);
}