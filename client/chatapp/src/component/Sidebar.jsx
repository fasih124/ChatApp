import { FaPowerOff } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../store/authSlice";
import { setSocket } from "../store/socketSlice";

export default function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1️⃣ Clear auth state
    dispatch(logout());

    // 2️⃣ Clear socket
    dispatch(setSocket(null));

    // 3️⃣ Redirect
    navigate("/login");
  };
  return (
    <div className=" flex flex-col justify-between items-center p-4 row-span-3   bg-gradient-to-t from-primary-500 to-primary-700 shadow-2xl/50  z-30">
      <Link to={"/login"}>
        <FaGear size={35} color="white" />{" "}
      </Link>
      <button onClick={handleLogout} title="Logout" className="cursor-pointer">
        <FaPowerOff size={30} color="white" />
      </button>
    </div>
  );
}
// bg-gradient-to-t from-primary-500 to-primary-700
