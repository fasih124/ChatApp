export default function SignupPage() {
  return (
    <div className="">
      <h1 className="text-6xl">WeChat</h1>
      <input type="email" className="block border-2" placeholder="Email" />
      <input
        type="password"
        className="block border-2"
        placeholder="Password"
      />
      <input
        type="password"
        className="block border-2"
        placeholder="Confirm Password"
      />
      <button>Create Account</button>
      <p>
        Already have an account. <a href="">Login Account</a>
      </p>
    </div>
  );
}
