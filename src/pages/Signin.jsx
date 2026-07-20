import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();

    // Temporary login
    console.log({ email, password });

    // Redirect to Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

          <h1 className="text-3xl font-bold text-center mb-8">
            Staff Sign In
          </h1>

          <form onSubmit={handleSignin} className="space-y-5">

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 text-sm font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Sign In
            </button>

          </form>

          <div className="mt-6 text-center">
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signin;