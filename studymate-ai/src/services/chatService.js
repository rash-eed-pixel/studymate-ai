// -----------------------------------------------------------------------------
// Service: chatService
// Description:
// Sends user messages to the n8n AI workflow.
// -----------------------------------------------------------------------------

const WEBHOOK_URL = "http://localhost:5678/webhook-test/3831339f-0aaa-4b1f-a011-6342957c8e83";

export async function askAI(message) {
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to contact AI.");
  }

  return response.json();
}