import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {

  const [quiz, setQuiz] = useState([]);

  const [loading, setLoading] = useState(false);

  const [score, setScore] = useState(0);

  const [started, setStarted] = useState(false);

  return (

    <QuizContext.Provider
      value={{
        quiz,
        setQuiz,
        loading,
        setLoading,
        score,
        setScore,
        started,
        setStarted,
      }}
    >

      {children}

    </QuizContext.Provider>

  );

}

export const useQuiz = () => useContext(QuizContext);