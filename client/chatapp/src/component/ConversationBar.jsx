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
    { name: "user01", url: "dfgdfg", lastMessage: "dfgfdg", time: "dfgdfg" },
  ];
  if (isLoading) {
    return <p className="p-4">Loading...</p>;
  }

  return (
    <div className="row-span-3 flex flex-col shadow-xl/30 z-20">
      <div className="flex flex-col justify-around items bg-gradient-to-l px-6 py-2 from-primary-500 to-primary-700   flex-[0.6]">
        <div className="flex justify-between items-center text-white">
          <img
            src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // alt="login user avatar"
            className="border-4 rounded-full w-20  h-20"
          />
          <div className="flex-1 p-4">
            <p className="font-bold text-lg">{me.name}</p>
            <p className="text-green-400 font-bold">{me.status}</p>
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
        {Allusers.map((user) => {
          return (
            <Link key={user._id} to={"/login"}>
              <div className="flex  justify-between items-center px-6 py-2">
                <img
                  src={user.AvatarUrl}
                  // alt="login user avatar"
                  className="border-4 rounded-full size-18 bg-white"
                />
                <div className="flex-1 p-4">
                  <p className="font-bold text-lg">{user.name}</p>
                  <p className="text-gray-700 font-semibold">
                    have a lot of fun. see Later.....
                  </p>
                </div>
                <p className="font-bold">12:30 pm</p>
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
