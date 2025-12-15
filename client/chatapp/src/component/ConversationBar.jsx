import { Link } from "react-router-dom";
export default function ConversationBar() {
  const users = [
    {
      id: "1",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
    {
      id: "2",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
    {
      id: "3",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
    {
      id: "4",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
    {
      id: "5",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
    {
      id: "6",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
    {
      id: "7",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
    {
      id: "8",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
    {
      id: "9",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
    {
      id: "10",
      AvatarUrl: "/./././",
      Name: "john Andreson",
      LastMessage: "have a lot of fun. see Later.....",
      Time: "12:15",
    },
  ];
  return (
    <div className="row-span-3 flex flex-col shadow-xl/30 z-20">
      <div className="flex flex-col justify-around items bg-gradient-to-l px-6 py-2 from-primary-500 to-primary-700   flex-[0.6]">
        <div className="flex justify-between items-center text-white">
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

        <input
          type="text"
          placeholder="🔍 Search contact and messages"
          className="bg-white px-4 py-2 rounded-lg"
        />
      </div>
      {/* =======================conversation List of People=============  */}
      <div className="bg-secondary-500  flex flex-col flex-2 overflow-auto ">
        {users.map((user) => {
          return (
            <Link key={user.id} to={"/login"}>
              <div className="flex  justify-between items-center px-6 py-2">
                <img
                  src={user.AvatarUrl}
                  // alt="login user avatar"
                  className="border-4 rounded-full size-18 bg-white"
                />
                <div className="flex-1 p-4">
                  <p className="font-bold text-lg">{user.Name}</p>
                  <p className="text-gray-700 font-semibold">
                    {user.LastMessage}
                  </p>
                </div>
                <p className="font-bold">{user.Time}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-between items-center text-white">
  <img
    src=""
    // alt="login user avatar"
    className="border-4 rounded-full size-18"
  />
  <div className="flex-1 p-4">
    <p className="font-bold text-lg">John Andreson</p>
    <p className="text-gray-200">have a lot of fun. see Later </p>
  </div>
  <p className="font-bold">12:15</p>
</div>; */
}
