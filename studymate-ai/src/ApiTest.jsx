import React, { useState } from "react";

export default function ApiTest() {
  const [prompt, setPrompt] = useState("Explain photosynethsis in 2 simple sentences.");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTest = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    const formData = new FormData();
    formData.append("type", "tutor");
    formData.append("prompt", prompt);

    try {
      const response = await fetch('/api/study', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `Server responded with status ${res.status}`);
      }

      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>🧪 Backend Connection Test</h2>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Test Prompt:
        </label>
        <textarea
          rows="3"
          style={{ width: "100%", padding: "8px" }}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <button
        onClick={handleTest}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: loading ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Connecting to Backend..." : "Send Request to Backend"}
      </button>

      {/* Error Output */}
      {error && (
        <div style={{ marginTop: "20px", padding: "10px", background: "#fee2e2", border: "1px solid #ef4444", color: "#991b1b", borderRadius: "5px" }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Success Output */}
      {response && (
        <div style={{ marginTop: "20px", padding: "15px", background: "#f0fdf4", border: "1px solid #22c55e", borderRadius: "5px" }}>
          <h3 style={{ color: "#166534", marginTop: 0 }}>✅ Connection Successful!</h3>
          <pre style={{ whiteSpace: "pre-wrap", background: "#fff", padding: "10px", border: "1px solid #ddd" }}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}