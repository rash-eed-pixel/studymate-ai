export default function QuizProgress({ current, total }) {

  const percentage = ((current + 1) / total) * 100;

  return (

    <div className="mb-8">

      <div className="mb-2 flex justify-between">

        <span>
          Question {current + 1} of {total}
        </span>

        <span>
          {Math.round(percentage)}%
        </span>

      </div>

      <div className="h-3 rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>

  );

}