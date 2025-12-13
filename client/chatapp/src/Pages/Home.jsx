import SideBar from "../component/Sidebar.jsx";
import ChatBox from "../component/ChatBox";
import ConversationBar from "../component/ConversationBar";

export default function Home() {
  return (
    <div>
      <SideBar></SideBar>
      <ConversationBar></ConversationBar>
      <ChatBox></ChatBox>
    </div>
  );
}
