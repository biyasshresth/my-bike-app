import React, { useState, ChangeEvent, FormEvent } from "react";
import { CheckCircle2, Facebook, Twitter, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterTwoPanel() {
  const [newuser, setNewUser] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    date_of_birth: "",
    address_line1: "",
    password: "",
    confirm_password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple frontend validation
    if (newuser.password !== newuser.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    setNewUser({
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      mobile_number: "",
      date_of_birth: "",
      address_line1: "",
      password: "",
      confirm_password: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* LEFT PANEL */}
      <div className="relative flex flex-col justify-center items-center text-black md:w-2/3 p-8 pl-14">
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gray-400 rounded-r-full shadow-sm z-0" />

        <div className="relative z-10 text-center w-full flex flex-col items-center gap-6 mb-28">
          <h1 className="text-xl lg:text-4xl font-bold leading-tight mt-2">
            <img src="/YamahaLogo1.png" alt="yamaha logo" className="w-24 flex justify-center mb-10" />
            <span className="text-xl lg:text-4xl text-black mb-2 inline-block">
              “ “
            </span>
            <br />
            Let’s Make it Happen Together!
          </h1>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex justify-center items-center rounded-3xl m-2 bg-gradient-to-b from-gray-700 to-gray-500 md:w-1/2 ">
        <div className="bg-white/10 backdrop-blur-md text-gray-600 w-full h-full rounded-2xl p-4 shadow-lg ">
          <div className="flex flex-row gap-4 justify-center mb-6">
            <h2 className="text-sm lg:text-xl text-gray-900 font-bold mt-4 text-center">
              Create a new account
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="first_name"
                value={newuser.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="p-3 rounded-lg text-gray-800 w-full h-8 border-gray-500                                                                                                                                                                                                                                                   focus:ring-2 focus:ring-gray-500 "
              />

              <input
                type="text"
                name="middle_name"
                value={newuser.middle_name}
                onChange={handleChange}
                placeholder="Middle Name"
                className="p-3 rounded-lg text-gray-800 w-full h-8"
              />

              <input
                type="text"
                name="last_name"
                value={newuser.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-3 rounded-lg text-gray-800 w-full h-8"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={newuser.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="p-3 rounded-lg text-gray-800 w-full h-8"
            />

            {/* Phone + DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="mobile_number"
                value={newuser.mobile_number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-3 rounded-lg text-gray-800 w-full h-8"
              />

              <input
                type="date"
                name="date_of_birth"
                placeholder="Date of birth"
                value={newuser.date_of_birth}
                onChange={handleChange}
                className="p-3 rounded-lg text-gray-800 w-full h-8"
              />
            </div>

            {/* Address */}
            <input
              type="text"
              name="address_line1"
              value={newuser.address_line1}
              onChange={handleChange}
              placeholder="Address"
              className="p-3 rounded-lg text-gray-800 w-full h-8"
            />

            {/* Passwords */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={newuser.password}
                  onChange={handleChange}
                  placeholder="New Password"
                  className="p-3 rounded-lg text-gray-800 w-full h-8"
                />
                <button
                  type="button"
                  className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  value={newuser.confirm_password}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="p-3 rounded-lg text-gray-800 w-full h-8"
                />
                <button
                  type="button"
                  className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={15} />
                  ) : (
                    <Eye size={15} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm">
              <input
                id="terms"
                type="checkbox"
                required
                className="w-5 h-5 accent-gray-400"
              />
              <label htmlFor="terms" className="text-gray-900">
                Creating your account means you agree to our Terms & Conditions.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#f3601c] text-white py-3 rounded-lg font-semibold"
            >
              Create Account
            </button>

            {/* Social Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-700 text-white py-3 rounded-lg"
              >
                <Facebook size={20} /> Facebook
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-sky-500 text-white py-3 rounded-lg"
              >
                <Twitter size={20} /> Twitter
              </button>
            </div>

            <p className="text-xs text-center mt-8 opacity-70">
              © Copyright 2025. Company Inc. Ltd
            </p>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-8 right-8 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
          >
            <CheckCircle2 className="text-green-900" size={24} />
            <span>Successfully registered!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
