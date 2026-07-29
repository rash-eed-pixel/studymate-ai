// -----------------------------------------------------------------------------
// Component: TypingIndicator
// Description:
// Animated typing indicator.
// -----------------------------------------------------------------------------

const TypingIndicator = () => {
  return (
    <div className="mb-6 flex justify-start">
      <div className="flex gap-2 rounded-full bg-white px-6 py-4 shadow">

        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-500"></span>

        <span
          className="h-3 w-3 animate-bounce rounded-full bg-blue-500"
          style={{ animationDelay: "0.2s" }}
        ></span>

        <span
          className="h-3 w-3 animate-bounce rounded-full bg-blue-500"
          style={{ animationDelay: "0.4s" }}
        ></span>

      </div>
    </div>
  );
};

export default TypingIndicator;