// -----------------------------------------------------------------------------
// Component: ChatHeader
// -----------------------------------------------------------------------------

import { FaRobot } from "react-icons/fa";

const ChatHeader = () => {
  return (
    <header className="flex items-center gap-4 border-b bg-white p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
        <FaRobot />
      </div>

      <div>
        <h2 className="text-xl font-bold">
          StudyMate AI Tutor
        </h2>

        <p className="text-sm text-green-600">
          Online
        </p>
      </div>
    </header>
  );
};

export default ChatHeader;