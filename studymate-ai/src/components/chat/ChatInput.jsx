// -----------------------------------------------------------------------------
// Component: ChatInput
// Description:
// Handles user input and sends messages to the AI.
// -----------------------------------------------------------------------------

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { askAI } from "../../services/chatService";

const ChatInput = ({ messages, setMessages }) => {
  const [text, setText] = useState("");

  const sendMessage = async () => {
    if (!text.trim()) return;

    const question = text;

    // Show the user's message immediately
    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        message: question,
      },
    ]);

    setText("");

    try {
      const result = await askAI(question);

      setMessages((previous) => [
        ...previous,
        {
          sender: "assistant",
          message: result.reply,
        },
      ]);
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          sender: "assistant",
          message: "⚠ Unable to connect to StudyMate AI.",
        },
      ]);
    }
  };

  return (
    <div className="border-t bg-white p-6">
      <div className="flex gap-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask StudyMate AI..."
          className="flex-1 rounded-xl border p-4 outline-none focus:border-blue-600"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-blue-600 px-8 text-white transition hover:bg-blue-700"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;