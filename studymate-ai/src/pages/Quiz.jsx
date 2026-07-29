import QuizHeader from "../components/quiz/QuizHeader";
import QuizForm from "../components/quiz/QuizForm";
import QuizHistory from "../components/quiz/QuizHistory";

export default function Quiz() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <QuizHeader />

      <div className="mt-8 grid gap-8 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <QuizForm />
        </div>

        <QuizHistory />

      </div>
    </div>
  );
}