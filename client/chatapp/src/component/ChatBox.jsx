import { FaPlus, FaArrowRight } from "react-icons/fa6";
export default function ChatBox() {
  let isSelected = false;
  return isSelected ? (
    <div className="bg-white row-span-3 flex flex-col justify-between p-5">
      {/* <p className="text-3xl font-semibold"></p> */}
      {/* Title Bar */}
      <div className="border-b-2 flex px-4 border-gray-400">
        <img
          src=""
          // alt="login user avatar"
          className="border-4 rounded-full size-18"
        />
        <div className="flex-1 p-4">
          <p className="font-bold text-lg">John Andreson</p>
          <p className="text-green-400 font-bold">Online</p>
        </div>
      </div>
      {/* message box */}
      <div className="flex-1 p-5 text-right">
        <p>asndksahjkdhsakdjsakjdh</p>
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
