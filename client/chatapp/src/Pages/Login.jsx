import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-gradient-to-l from-primary-500 to-primary-700 h-svh flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center bg-amber-50 rounded-2xl p-16">
        <h1 className="text-center text-5xl font-bold">WeChat</h1>
        <p className="text-center text-xl font-semibold mb-6">
          Connect with the world
        </p>
        <input
          className="text-lg p-1 mb-2 border-2 rounded-lg"
          type="email"
          placeholder="Email"
        />
        <input
          className="text-lg p-1 mb-2 border-2 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button
          className="border-2 border-black cursor-pointer mt-7 px-5 py-2
        bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg
         text-white font-bold text-lg"
          disabled
        >
          Login
        </button>
        <p className="text-center text-base mt-2 ">
          Don't have Account,{" "}
          <Link to={"/register"} className="font-bold text-primary-700 ">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
//bg-primary-500 hover:bg-primary-700
