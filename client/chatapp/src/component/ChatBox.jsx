import { FaPlus, FaArrowRight } from "react-icons/fa6";
export default function ChatBox() {
  const messages = [
    { id: "01", text: "hello", sender: "user3" },
    { id: "02", text: "hi, buddy", sender: "user1" },
    { id: "03", text: "what are you doing?", sender: "user3" },
    { id: "04", text: "Nothing", sender: "user1" },
    { id: "05", text: "need help with door. can you fix it", sender: "user3" },
    { id: "06", text: "got you! don't worry", sender: "user1" },
    { id: "07", text: "I fixed door", sender: "user1" },
    { id: "08", text: "Thanks for the help 🙌", sender: "user3" },
  ];
  let isSelected = true;
  return isSelected ? (
    <div className="bg-white row-span-3 flex flex-col justify-between p-5">
      {/* <p className="text-3xl font-semibold"></p> */}
      {/* Title Bar */}
      <div className="border-b-2 flex px-4 border-gray-400">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // alt="login user avatar"
          className="border-4 rounded-full h-20 w-20 object-cover"
        />
        <div className="flex-1 p-4">
          <p className="font-bold text-lg">Junaid Khalid</p>
          <p className="text-green-400 font-bold">Online</p>
        </div>
      </div>
      {/* message box */}
      <div className="flex-1 p-5 flex flex-col overflow-auto ">
        {messages.map((m) => {
          let messageStyle = "py-2  px-5 rounded-2xl block w-fit m-2";

          if (m.sender === "user1") {
            messageStyle +=
              " self-end bg-gradient-to-l from-primary-500 to-primary-700 text-white";
          } else {
            messageStyle += " bg-gray-200 self-start";
          }

          return (
            <p className={messageStyle} key={m.id}>
              {m.text}
            </p>
          );
        })}
      </div>
      {/* input feild */}
      <div className="border-t-2 border-gray-400 flex p-2  items-center">
        <input
          type="text"
          className="flex-1 py-2 px-4 bg-gray-50  outline-0"
          placeholder="Type your message here..."
        />
        <div className="flex  items-center">
          <FaPlus color="#777ce8" size={30} className="cursor-pointer" />
          <button className="ml-3 flex cursor-pointer justify-center mr-2 font-bold text-white items-center  bg-gradient-to-l from-primary-500 to-primary-700  px-10 py-2 rounded-sm">
            Send <FaArrowRight className="ml-2 mt-1" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-white row-span-3 flex flex-col justify-center items-center">
      <p className="text-3xl font-semibold">
        Select the Chat To Start Conversation.
      </p>
    </div>
  );
}
