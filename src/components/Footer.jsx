import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Copyright */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            © 2026 Starz Dental
          </h3>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mt-6 text-sm font-medium text-gray-400">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>

          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          <Link to="/signin" className="hover:text-blue-600 transition">
            Staff Login
          </Link>
        </div>

        {/* Contact */}
        <div className="mt-8 space-y-2 text-center text-sm text-gray-500">
          <p>📍 Hyderabad, Telangana</p>
          <p>📞 +91 7013989144 , +91 4035529975</p>
          <p>✉️ dr.tabassumfarheen@gmail.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 mt-8">

          {/* Facebook */}
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="#1877F2"
            >
              <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.25c-1.23 0-1.62.76-1.62 1.55V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0022 12z"/>
            </svg>
          </a>*/}

{/* Instagram */}
<a
  href="https://www.instagram.com/starz_dental?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-3 px-5 py-3 rounded-full bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
>
  <svg
    className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A5.5 5.5 0 106.5 13 5.5 5.5 0 0012 7.5zm0 2A3.5 3.5 0 118.5 13 3.5 3.5 0 0112 9.5zm4.75-3.25a1.25 1.25 0 101.25 1.25 1.25 1.25 0 00-1.25-1.25z"/>
  </svg>

  <div className="flex flex-col leading-tight">
    <span className="text-xs uppercase tracking-wider opacity-90">
      Follow us on
    </span>
    <span className="text-lg font-bold">Instagram</span>
  </div>
</a>
          {/* YouTube */}
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="#FF0000"
            >
              <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1A31.3 31.3 0 0024 12a31.3 31.3 0 00-.5-5.8zM9.75 15.5v-7L16 12l-6.25 3.5z"/>
            </svg>
          </a>*/}

        </div>

      </div>
    </footer>
  );
};

export default Footer;