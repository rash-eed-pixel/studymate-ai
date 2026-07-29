export default function QuizHistory() {

  return (

    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">

        Recent Quizzes

      </h2>

      <div className="space-y-4">

        <div className="rounded-xl bg-slate-100 p-4">
          WAEC Physics
        </div>

        <div className="rounded-xl bg-slate-100 p-4">
          NECO Biology
        </div>

        <div className="rounded-xl bg-slate-100 p-4">
          JAMB Mathematics
        </div>

      </div>

    </div>

  );

}