// -----------------------------------------------------------------------------
// Component: SuggestedQuestions
// -----------------------------------------------------------------------------

const questions = [
  "Explain Newton's Laws",
  "Generate a WAEC Biology quiz",
  "Summarize Photosynthesis",
  "Teach me Algebra",
];

const SuggestedQuestions = () => {

  return (

    <div className="mb-8 flex flex-wrap gap-4">

      {questions.map((question) => (

        <button
          key={question}
          className="rounded-full border px-5 py-3 transition hover:bg-blue-600 hover:text-white"
        >
          {question}
        </button>

      ))}

    </div>

  );

};

export default SuggestedQuestions;