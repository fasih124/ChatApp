import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getMe, getAllUsers } from "../query/userQueries";

export default function ConversationBar() {
  const { data: me, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  const { data: Allusers } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  const users = [
    {
      id: 1,
      name: "Ali Khan",
      avatarUrl:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastMessage: "Hey, are you coming today?",
      lastMessageTime: "10:45 AM",
      status: "online",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
      lastMessage: "I’ll send the files shortly.",
      lastMessageTime: "09:30 AM",
      status: "offline",
    },
    {
      id: 3,
      name: "Usman Tariq",
      avatarUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastMessage: "Let’s discuss this tomorrow.",
      lastMessageTime: "Yesterday",
      status: "online",
    },
    {
      id: 4,
      name: "Junaid Khalid",
      avatarUrl:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastMessage: "Thanks for the help 🙌",
      lastMessageTime: "Yesterday",
      status: "offline",
    },
    {
      id: 5,
      name: "Ayesha Noor",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      lastMessage: "Call me when free.",
      lastMessageTime: "08:10 AM",
      status: "online",
    },
  ];

  if (isLoading) {
    return <p className="p-4">Loading...</p>;
  }

  return (
    <div className="row-span-3 flex flex-col shadow-xl/30 z-20">
      <div className="flex flex-col justify-around items bg-gradient-to-l px-6 py-2 from-primary-500 to-primary-700   flex-[0.6]">
        <div className="flex justify-between items-center text-white">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // alt="login user avatar"
            className="border-4 rounded-full w-20  h-20 object-cover"
          />
          <div className="flex-1 p-4">
            <p className="font-bold text-lg">Hamza Ali</p>
            <p className="text-green-400 font-bold">Online</p>
          </div>
        </div>

        <input
          type="text"
          placeholder="🔍 Search contact and messages"
          className="bg-white px-4 py-2 rounded-lg"
        />
      </div>
      {/* =======================conversation List of People=============  */}
      <div className="bg-secondary-500  flex flex-col flex-2 overflow-auto ">
        {users.map((user) => {
          // let statusstyle = "font-semibold ";
          let userstyle = "flex  justify-between items-center px-6 py-2";
          if (user.name === "Junaid Khalid") {
            userstyle += " text-white bg-primary-500 ";
          }
          return (
            <Link key={user.id} to={"/login"}>
              <div className={userstyle}>
                <img
                  src={user.avatarUrl}
                  // alt="login user avatar"
                  className="border-4 rounded-full h-20 w-20 object-cover bg-white"
                />
                <div className="flex-1 p-4">
                  <p className="font-bold text-lg">{user.name}</p>
                  <p className="">{user.lastMessage}</p>
                </div>

                <p className="font-bold">{user.lastMessageTime}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
