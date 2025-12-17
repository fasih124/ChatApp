import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { registerUser } from "../query/authQueries";
import { login } from "../store/authSlice";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // Save user + token in Redux
      dispatch(login(data));

      // Redirect to Home
      navigate("/");
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Registration failed");
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data is submitted : ", form);
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
            type="Text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
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
            value={form.password}
            onChange={handleChange}
            required
            name="password"
          />

          <button
            type="submit"
            disabled={mutation.isLoading}
            className="border-2 border-black cursor-pointer mt-7 px-5 py-2
        bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg
         text-white font-bold text-lg"
          >
            {mutation.isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="text-center text-base mt-2 ">
          Already have an Account,{" "}
          <Link to={"/login"} className="font-bold text-primary-700 ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
