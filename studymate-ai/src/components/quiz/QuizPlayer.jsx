import { useState } from "react";
import quizData from "../../data/quizData";
import QuizProgress from "./QuizProgress";

export default function QuizPlayer() {

  const [current, setCurrent] = useState(0);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  const question = quizData[current];

  function choose(option) {

    if (option === question.answer) {

      setScore(score + 1);

    }

    if (current + 1 === quizData.length) {

      setFinished(true);

    } else {

      setCurrent(current + 1);

    }

  }

  if (finished) {

    return (

      <div className="rounded-3xl bg-white p-10 shadow">

        <h1 className="text-3xl font-bold">

          Quiz Complete 🎉

        </h1>

        <p className="mt-5 text-2xl">

          Score

        </p>

        <h2 className="mt-2 text-5xl font-bold text-blue-600">

          {score} / {quizData.length}

        </h2>

      </div>

    );

  }

  return (

    <div className="rounded-3xl bg-white p-10 shadow">

      <h2 className="text-lg text-slate-500">

        Question {current + 1}

      </h2>

      <h1 className="mt-5 text-3xl font-bold">

        {question.question}

      </h1>

      <div className="mt-8 space-y-4">

        {question.options.map((option) => (

          <button
            key={option}
            onClick={() => choose(option)}
className="w-full rounded-2xl border-2 border-slate-200 bg-white p-5 text-left transition duration-200 hover:border-blue-600 hover:bg-blue-50"          >

            {option}

          </button>

        ))}

      </div>

    </div>

  );

}