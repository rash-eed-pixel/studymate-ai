// -----------------------------------------------------------------------------
// Component: ChatSidebar
// Description:
// Previous AI conversations.
// -----------------------------------------------------------------------------

import { FaPlus } from "react-icons/fa";

const history = [
  "Newton's Laws",
  "WAEC Biology Quiz",
  "Study Timetable",
  "JAMB Mathematics",
];

const ChatSidebar = () => {
  return (
    <aside className="hidden w-72 border-r bg-white lg:block">

      <div className="border-b p-6">

        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700">

          <FaPlus />

          New Chat

        </button>

      </div>

      <div className="space-y-3 p-5">

        {history.map((chat) => (
          <button
            key={chat}
            className="w-full rounded-xl p-4 text-left transition hover:bg-slate-100"
          >
            {chat}
          </button>
        ))}

      </div>

    </aside>
  );
};

export default ChatSidebar;