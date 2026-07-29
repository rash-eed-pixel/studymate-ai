import { useState } from "react";
import { generateQuiz } from "../../services/quizService";
import { useQuiz } from "../../context/QuizContext";
export default function QuizForm() {
  const [exam, setExam] = useState("WAEC");
  const [subject, setSubject] = useState("Physics");
  const [difficulty, setDifficulty] = useState("Medium");
  const [questions, setQuestions] = useState(20);
  const [topic, setTopic] = useState("");

  const {
    setQuiz,
    setStarted,
    loading,
    setLoading,
  } = useQuiz();

  const handleGenerate = async () => {
    setLoading(true);

    try {
      const response = await generateQuiz({
        exam,
        subject,
        topic,
        difficulty,
        questions,
      });

      console.log("Response from n8n:", response);

      let quiz = response;

      // If n8n returns { text: "....json...." }
      if (quiz.text) {
        quiz = JSON.parse(quiz.text);
      }

      setQuiz(quiz);
      setStarted(true);

    } catch (error) {
      console.error(error);
      alert("Unable to generate quiz.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Generate Quiz
      </h2>

      <div className="grid gap-5">

        <select
          value={exam}
          onChange={(e) => setExam(e.target.value)}
          className="rounded-xl border p-4"
        >
          <option>WAEC</option>
          <option>NECO</option>
          <option>JAMB</option>
          <option>University</option>
        </select>

        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="rounded-xl border p-4"
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="rounded-xl border p-4"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <input
          type="number"
          value={questions}
          onChange={(e) => setQuestions(Number(e.target.value))}
          className="rounded-xl border p-4"
        />

        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic (Optional)"
          className="rounded-xl border p-4"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="rounded-xl bg-blue-600 p-4 font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Quiz"}
        </button>

      </div>
    </div>
  );
}