import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

interface LoginProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [identifier, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Static Demo Credentials
  const DEMO_USER = {
    email: "demo@example.com",
    password: "demo123",
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (identifier === DEMO_USER.email && password === DEMO_USER.password) {
      setIsLoggedIn(true);
      navigate("/");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 bg-[url('/LoginBg.png')] bg-cover bg-center bg-no-repeat filter blur-sm"></div>
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Form Card */}
      <div className="relative z-10 border-white shadow-lg rounded-lg p-8 w-full max-w-md text-center bg-gray-300 bg-opacity-90 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="YamahaLogo.svg" alt="Logo" className="w-12 h-12" />
          <h1 className="text-3xl font-bold text-gray-900 font-mono">Login</h1>
        </div>

        <h2 className="text-xl font-bold mb-6 mt-2 text-gray-900">
          Welcome To Our Royal Palm
          <br />
          Real Estate
        </h2>

        <form onSubmit={handleLogin} className="space-y-5 text-left">
          <div>
            <label className="block text-gray-900 font-medium mb-1">
              Email :
            </label>
            <input
              type="email"
              value={identifier}
              onChange={handleEmailChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-900 font-medium mb-1">
              Password :
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 mt-3 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-[#6652b6] hover:text-white transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-[#6652b6] font-bold hover:underline cursor-pointer"
            onClick={() => navigate("/registration")}
          >
            Sign Up
          </span>
        </p>
      </div>

      {/* Back To Home Button BELOW the Login Card */}
      <button
        onClick={() => navigate("/")}
        className="relative z-10 mt-6 w-full max-w-md bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700 transition"
      >
        Back To Home
      </button>
    </div>
  );
};

export default Login;
