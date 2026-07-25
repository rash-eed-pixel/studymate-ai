import ChatHeader from "../components/chat/ChatHeader";
import EmptyState from "../components/chat/EmptyState";
import ChatInput from "../components/chat/ChatInput";

const Chat = () => {
  return (
    <div className="flex h-screen flex-col bg-slate-100">

      <ChatHeader />

      <main className="flex-1 overflow-y-auto px-6">
        <EmptyState />
      </main>

      <ChatInput />

    </div>
  );
};

export default Chat;