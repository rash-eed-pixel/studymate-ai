// -----------------------------------------------------------------------------
// Component: ChatInput
// -----------------------------------------------------------------------------

import { FaPaperPlane } from "react-icons/fa";

const ChatInput = () => {
  return (
    <div className="sticky bottom-0 border-t bg-white p-6">

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Ask StudyMate AI anything..."
          className="flex-1 rounded-xl border p-4 outline-none focus:border-blue-600"
        />

        <button className="rounded-xl bg-blue-600 px-8 text-white transition hover:bg-blue-700">
          <FaPaperPlane />
        </button>

      </div>

    </div>
  );
};

export default ChatInput;