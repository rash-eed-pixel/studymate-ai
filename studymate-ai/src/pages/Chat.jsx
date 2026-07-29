// -----------------------------------------------------------------------------
// Page: Chat
// Description:
// AI Tutor interface.
// -----------------------------------------------------------------------------

import { useState } from "react";

import ChatHeader from "../components/chat/ChatHeader";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatMessage from "../components/chat/ChatMessage";
import ChatInput from "../components/chat/ChatInput";
import SuggestedQuestions from "../components/chat/SuggestedQuestions";

const Chat = () => {

  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message:
        "👋 Welcome to StudyMate AI. Ask me anything about WAEC, NECO, JAMB or University courses.",
    },
  ]);

  return (
    <div className="flex h-screen bg-slate-50">

      <ChatSidebar />

      <div className="flex flex-1 flex-col">

        <ChatHeader />

        <main className="flex-1 overflow-y-auto px-10 py-8">

          <SuggestedQuestions />

          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))}

        </main>

        <ChatInput
          messages={messages}
          setMessages={setMessages}
        />

      </div>

    </div>
  );
};

export default Chat;