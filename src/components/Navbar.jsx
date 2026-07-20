import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/starz_dental_logo_2.png";
import { BOOKING_URL } from "../constants/link";

const bookingUrl =
  "https://www.justdial.com/online-consult/bookslot?docid=040PXX40.XX40.210813101755.C6C4&source=77&version=3.1&wap=77&action=BA";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-bold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    /* 
      MOBILE: sticky top-0, z-50, isolate, 80% opacity white with backdrop blur
      DESKTOP (md:): static position, solid white background, no backdrop blur
    */
    <nav className="sticky top-0 z-50 isolate bg-white/80 backdrop-blur-md border-b border-gray-200/80 md:static md:bg-white md:backdrop-blur-none md:border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Starz Dental"
            className="h-24 sm:h-26 md:h-30 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>

          <Link to="/services" className={navLinkClass("/services")}>
            Services
          </Link>

          <Link to="/about" className={navLinkClass("/about")}>
            About
          </Link>

          <Link to="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>

          <Link to="/signin" className={navLinkClass("/signin")}>
            Staff Login
          </Link>
        </div>

        {/* Desktop Book Button */}
        <a
          href={BOOKING_URL || bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 p-1 rounded-lg focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md" : "max-h-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-5 text-center font-medium">

          <Link
            to="/"
            className={navLinkClass("/")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={navLinkClass("/services")}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/about"
            className={navLinkClass("/about")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={navLinkClass("/contact")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/signin"
            className={navLinkClass("/signin")}
            onClick={() => setMenuOpen(false)}
          >
            Staff Login
          </Link>

          <a
            href={BOOKING_URL || bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition"
          >
            Book Now
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;