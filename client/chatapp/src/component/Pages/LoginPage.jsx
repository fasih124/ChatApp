export default function LoginPage() {
  return (
    <div className="">
      <h1 className="text-6xl">WeChat</h1>
      <input type="email" className="block border-2" placeholder="Email" />
      <input
        type="password"
        className="block border-2"
        placeholder="Password"
      />
      <button> Login</button>
      <p>
        Don't have an account? <a href="">Create Account</a>
      </p>
    </div>
  );
}
