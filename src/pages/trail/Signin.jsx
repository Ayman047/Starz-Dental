import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    // TODO: wire up authentication logic here
    console.log('Staff signin:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col font-sans">

      {/* ── INNER CARD WRAPPER (mimics the white page-in-page from screenshot) ── */}
      <div className="max-w-2xl w-full mx-auto mt-6 mb-6 bg-white rounded-sm shadow-lg flex flex-col min-h-130">

        {/* ── NAVBAR ── */}
        <nav className="bg-blue-50 px-6 py-3 flex justify-between items-center rounded-t-sm">
          {/* Logo placeholder — 72×36 px */}
          <div
            className="flex items-center justify-center bg-white border border-gray-200 rounded overflow-hidden shrink-0"
            style={{ width: '72px', height: '36px' }}
          >
            {/* Replace with: <img src="/logo.png" alt="Starz Dental" className="w-full h-full object-contain" /> */}
            <span className="text-gray-300 text-xs font-medium">72×36</span>
          </div>

          {/* Nav links */}
          <div className="flex space-x-5 text-xs font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Sign up button */}
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded transition"
          >
            Sign up
          </Link>
        </nav>

        {/* ── SIGNIN FORM AREA ── */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-14">
          <h1 className="text-2xl font-black tracking-widest text-gray-900 mb-8 uppercase">
            SIGNIN
          </h1>

          <form onSubmit={handleSignin} className="w-full max-w-xs space-y-3">
            {/* Email field */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 bg-white"
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded pl-9 pr-9 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Signin button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-semibold transition"
            >
              signin
            </button>
          </form>

          {/* ── FORGOT PASSWORD + SIGN UP ── */}
          <div className="mt-5 text-center space-y-2">
            <p className="text-xs text-gray-500">
              Forgot your password?{' '}
              <Link to="/forgot-password" className="text-blue-600 hover:underline font-medium">
                Reset it
              </Link>
            </p>
            <p className="text-xs text-gray-500">
              Have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signin;
