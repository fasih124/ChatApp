import { useParams } from "react-router-dom";

export default function Chat() {
  const { chatId } = useParams();
  return <div>Chat Room ID: {chatId}</div>;
}
