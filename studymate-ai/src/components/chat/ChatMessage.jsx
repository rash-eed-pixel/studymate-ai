// -----------------------------------------------------------------------------
// Component: ChatMessage
// Description:
// Displays individual chat messages.
// -----------------------------------------------------------------------------

const ChatMessage = ({ sender, message }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`mb-6 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-xl
          rounded-3xl
          px-6
          py-4
          shadow-md
          ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800"
          }
        `}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;