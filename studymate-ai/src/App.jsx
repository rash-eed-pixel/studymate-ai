import React, { useState } from "react";

export default function App() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(null);

  // Dashboard App State
  const [activeTab, setActiveTab] = useState("tutor"); // 'tutor', 'summarizer', 'quiz', 'flashcards', 'planner'
  const [depth, setDepth] = useState("Standard Prep"); // 'Beginner (ELI5)', 'Standard Prep', 'Advanced / College'
  const [promptText, setPromptText] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  // API Request & Execution State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [history, setHistory] = useState([]);

  // Handle Login / Signup with Real Backend Endpoint Call
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError(null);

    if (!email || !password) {
      setAuthError("Please enter both email and password.");
      return;
    }

    try {
      const endpoint = authMode === "login" ? "/api/auth/login" : "/api/auth/register";
      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `${authMode === "login" ? "Login" : "Registration"} failed.`);
      }

      // Save token if returning JWT
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      setIsAuthenticated(true);
    } catch (err) {
      console.warn("Backend auth unavailable or failed, allowing local workspace entry:", err.message);
      // Fallback: If backend auth route is missing/not implemented yet, allow login anyway
      setAuthError(err.message);
      
      // If it's just a network/route error, let the user into the demo dashboard anyway
      if (err.message.includes("Failed to fetch") || err.message.includes("404")) {
        setAuthError(null);
        setIsAuthenticated(true);
      }
    }
  };

  // Handle Generating Study Materials
  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!promptText && !pdfFile) {
      return setError("Please enter a topic or upload a PDF.");
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    const formData = new FormData();
    formData.append("type", activeTab);
    formData.append("prompt", `[Depth: ${depth}] ${promptText}`);
    if (pdfFile) formData.append("pdf", pdfFile);

    try {
      const res = await fetch("http://localhost:5000/api/study", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate study content.");

      setResponse(data);
      setHistory((prev) => [
        { type: activeTab, prompt: promptText || "PDF Document", date: new Date().toLocaleTimeString() },
        ...prev,
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // VIEW 1: AUTHENTICATION (LOGIN / SIGNUP)
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-slate-100 font-sans">
        <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
          <h1 className="text-2xl font-bold text-center text-white mb-1">
            StudyMate <span className="text-blue-500">AI</span>
          </h1>
          <p className="text-xs text-center text-slate-400 mb-6">
            {authMode === "login" ? "Sign in to access your study workspace" : "Create a new account"}
          </p>

          {authError && (
            <div className="mb-4 p-2.5 bg-red-950/80 border border-red-500/50 text-red-300 rounded text-xs text-center">
              {authError}
            </div>
          )}

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-slate-300 font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="student@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition duration-200"
            >
              {authMode === "login" ? "SIGN IN" : "CREATE ACCOUNT"}
            </button>
          </form>

          <div className="mt-4 text-center text-xs text-slate-400">
            {authMode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => {
                setAuthError(null);
                setAuthMode(authMode === "login" ? "signup" : "login");
              }}
              className="text-blue-500 underline hover:text-blue-400 ml-1"
            >
              {authMode === "login" ? "Sign up" : "Log in"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: DASHBOARD WORKSPACE
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Bar Navigation Header */}
      <header className="flex justify-between items-center px-6 py-3 bg-slate-900 border-b border-slate-800">
        <h2 className="text-lg font-bold text-white tracking-wide">
          StudyMate <span className="text-blue-500">AI</span>
        </h2>

        <div className="flex items-center space-x-3">
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded transition">
            📜 History ({history.length})
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setIsAuthenticated(false);
            }}
            className="bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1.5 rounded font-medium transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Navigation Tabs Bar */}
        <div className="flex bg-slate-900 p-1 rounded-full border border-slate-800 mb-5">
          {[
            { id: "tutor", label: "🤖 AI Tutor" },
            { id: "summarizer", label: "📖 Summarizer" },
            { id: "quiz", label: "📝 Quiz" },
            { id: "flashcards", label: "🎴 Flashcards" },
            { id: "planner", label: "📅 Planner" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Feature Depth Selector Row */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-xs font-bold text-slate-200">Target Explanation Depth</h3>
            <p className="text-[11px] text-slate-500">Adjust the simplicity or complexity of AI responses.</p>
          </div>

          <div className="flex space-x-1.5">
            {["Beginner (ELI5)", "Standard Prep", "Advanced / College"].map((item) => (
              <button
                key={item}
                onClick={() => setDepth(item)}
                className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                  depth === item
                    ? "bg-blue-900/80 border-blue-500 text-white font-semibold"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Work Card Form */}
        <form onSubmit={handleGenerate} className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl">
          {/* File Upload Dotted Box */}
          <div className="border border-dashed border-slate-700 rounded-lg p-2.5 text-center mb-3 bg-slate-950/40">
            <span className="text-xs text-slate-300 mr-2">📄 Optional PDF Upload</span>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              className="text-xs text-slate-400 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-xs file:bg-blue-600 file:text-white hover:file:bg-blue-500"
            />
          </div>

          {/* Prompt Area */}
          <textarea
            rows={7}
            placeholder={`Enter a difficult topic or question you'd like the ${activeTab.toUpperCase()} to explain...`}
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-slate-700 resize-y"
          />

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wider uppercase rounded-full shadow-lg shadow-blue-600/30 transition duration-200 disabled:opacity-50"
          >
            {loading ? "GENERATING CONTENT..." : `START ${activeTab.toUpperCase()}`}
          </button>
        </form>

        {/* Error State Banner */}
        {error && (
          <div className="mt-4 p-3 bg-red-950/60 border border-red-500 text-red-300 rounded-lg text-xs">
            ❌ {error}
          </div>
        )}

        {/* Response Result Display Card */}
        {response && (
          <div className="mt-5 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl">
            <h3 className="text-sm font-bold text-blue-400 mb-3 uppercase tracking-wide">Generated Result</h3>

            {/* General Text Response */}
            {response.result && (
              <div className="whitespace-pre-wrap text-xs text-slate-300 leading-relaxed">
                {response.result}
              </div>
            )}

            {/* Quiz Array Display */}
            {response.quiz && (
              <div className="space-y-3">
                {response.quiz.map((q, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-slate-200 mb-2">{idx + 1}. {q.question}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {q.options?.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className={`p-2 text-xs rounded border ${
                            oIdx === q.correctIndex
                              ? "bg-emerald-950/50 border-emerald-500 text-emerald-300"
                              : "bg-slate-900 border-slate-800 text-slate-400"
                          }`}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Flashcards Array Display */}
            {response.flashcards && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {response.flashcards.map((card, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-3 rounded-lg">
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">Front</div>
                    <div className="text-xs text-slate-200 mb-3">{card.front}</div>
                    <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">Back</div>
                    <div className="text-xs text-slate-300">{card.back}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}