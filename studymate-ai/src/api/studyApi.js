const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

/**
 * Sends study requests (text, optional PDF/image) to the backend API.
 * @param {Object} params
 * @param {string} params.type - 'tutor' | 'quiz' | 'flashcards' | 'summarizer' | 'planner'
 * @param {string} params.prompt - Text input/notes
 * @param {File} [params.pdf] - Optional PDF file object
 * @param {File} [params.image] - Optional Image file object
 * @param {number} [params.startPage] - Optional starting page number
 * @param {number} [params.endPage] - Optional ending page number
 */
export async function generateStudyMaterial({ type, prompt, pdf, image, startPage, endPage }) {
  const formData = new FormData();

  formData.append("type", type);
  if (prompt) formData.append("prompt", prompt);
  if (pdf) formData.append("pdf", pdf);
  if (image) formData.append("image", image);
  if (startPage) formData.append("startPage", startPage);
  if (endPage) formData.append("endPage", endPage);

  // Do NOT manually set Content-Type header when using FormData; 
  // the browser will automatically set 'multipart/form-data' with the boundary string.
  const response = await fetch(`${API_BASE_URL}/api/study`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to generate study material.");
  }

  return data;
}