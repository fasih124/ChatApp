import { FaPowerOff } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className=" flex flex-col justify-between items-center p-4 row-span-3   bg-gradient-to-t from-primary-500 to-primary-700 shadow-2xl/150  z-30">
      <Link to={"/login"}>
        <FaGear size={35} color="white" />{" "}
      </Link>
      <Link to={"/login"}>
        <FaPowerOff size={30} color="white" />
      </Link>
    </div>
  );
}
// bg-gradient-to-t from-primary-500 to-primary-700
