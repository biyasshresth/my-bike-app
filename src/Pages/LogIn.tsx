import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const [identifier, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { login } = useAuth();

  const DEMO_USER = {
    email: "demo@example.com",
    password: "demo123",
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (identifier === DEMO_USER.email && password === DEMO_USER.password) {
      login();
      setError("");

      // 🔥 Show popup
      setShowSuccess(true);

      // Hide popup + redirect
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/");
      }, 1000);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* 🔥 Animated Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div
            className="bg-white text-green-700 px-10 py-6 rounded-xl shadow-xl text-center 
                          animate-[fadeIn_0.5s_ease-out]"
          >
            <h2 className="text-2xl font-bold">LOGIN SUCCESSFUL</h2>
            <p className="text-gray-600 mt-1">Redirecting...</p>
          </div>
        </div>
      )}

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/LoginBg.png')] bg-cover bg-center bg-no-repeat filter blur-sm"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Card */}
      <div className="relative z-10 border-white shadow-lg rounded-lg p-8 w-full max-w-md text-center bg-gray-700 bg-opacity-90 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src="YamahaLogo1.png"
            alt="Logo"
            className="w-12 h-12 text-black"
          />
          <h1 className="text-3xl font-bold text-gray-200 font-mono">Login</h1>
        </div>

        <h2 className="text-xl font-bold mb-6 mt-2 text-gray-200">
          Welcome To Our MT-15 Page <br /> MT NEPAL{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg"
            alt="Nepal Flag"
            className="inline-block w-6 h-6 "
          />
        </h2>

        <form onSubmit={handleLogin} className="space-y-5 text-left">
          <div>
            <label className="block text-gray-200 font-medium mb-1">
              Email :
            </label>
            <input
              type="email"
              value={identifier}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-200 font-medium mb-1">
              Password :
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-[#6652b6] transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-[#fad9a1]  font-bold hover:underline cursor-pointer"
            onClick={() => navigate("/sign-up")}
          >
            Sign Up
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="relative z-10 mt-6 w-full max-w-md bg-gray-700 text-white py-2 rounded-md hover:bg-gray-900 transition"
      >
        Back To Home
      </button>
    </div>
  );
};

export default Login;
