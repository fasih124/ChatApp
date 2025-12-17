import { loginUser } from "../query/authQueries";
import { login } from "../store/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // save auth in redux
      dispatch(login(data));

      // redirect to home
      navigate("/");
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Login failed");
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("log in data is submitted : ", form);
    mutation.mutate(form);
  };

  return (
    <div className="bg-gradient-to-l from-primary-500 to-primary-700 h-svh flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center bg-amber-50 rounded-2xl p-16">
        <h1 className="text-center text-5xl font-bold">Hi!World</h1>
        <p className="text-center text-xl font-semibold mb-6">
          Connect with the world
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="text-lg p-1 mb-2 border-2 rounded-lg"
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="text-lg p-1 mb-2 border-2 rounded-lg"
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={mutation.isLoading}
            className="border-2 border-black cursor-pointer mt-7 px-5 py-2
        bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg
         text-white font-bold text-lg"
          >
            {mutation.isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
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
