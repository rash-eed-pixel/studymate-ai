// -----------------------------------------------------------------------------
// Component: EmptyState
// -----------------------------------------------------------------------------

import chatSuggestions from "../../data/chatSuggestions";

const EmptyState = () => {
  return (
    <div className="mx-auto mt-20 max-w-3xl text-center">

      <h1 className="text-5xl font-bold">
        👋 Hello!
      </h1>

      <p className="mt-5 text-lg text-gray-600">
        What would you like to learn today?
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">

        {chatSuggestions.map((item) => (
          <button
            key={item}
            className="rounded-2xl border bg-white p-6 text-left shadow transition hover:border-blue-500 hover:shadow-lg"
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  );
};

export default EmptyState;