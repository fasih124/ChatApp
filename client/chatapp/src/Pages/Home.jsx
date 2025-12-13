import SideBar from "../component/Sidebar.jsx";
import ChatBox from "../component/ChatBox";
import ConversationBar from "../component/ConversationBar";

export default function Home() {
  return (
    <div
      className="grid bg-amber-700 w-dvw h-dvh
      grid-rows-[minmax(0px,_1fr)_minmax(0px,_3fr)_minmax(0px,_0.5fr)]
      grid-cols-[70px_minmax(0px,_1fr)_minmax(0px,_2fr)]"
    >
      <SideBar></SideBar>
      <ConversationBar></ConversationBar>
      <ChatBox></ChatBox>
    </div>
  );
}
