import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BOOKING_URL } from "../constants/link";
import { MapPin, Clock3, Mail, Phone } from "lucide-react";

const Contact = () => {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.3614040155376!2d78.39322887489395!3d17.364416603466992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb966fff9f67a1%3A0x28c9db057cacb0a9!2sStarz%20Multi%20Specialty%20dental%20care!5e1!3m2!1sen!2sin!4v1782988787686!5m2!1sen!2sin";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      <Navbar />

      {/* MAIN CONTAINER STRUCTURE MATCHING ABOUT.JSX */}
      <main className="flex-1 w-full flex flex-col items-center justify-center px-5 sm:px-8 py-12 md:py-16">
        <div className="w-full max-w-xl">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Get In{" "}
              <span className="relative inline-block text-blue-600">
                Touch
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full"
                  height="12"
                  viewBox="0 0 220 12"
                  fill="none"
                >
                  <path
                    d="M3 9C50 2 95 2 140 7C170 10 195 8 217 5"
                    stroke="#93C5FD"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="max-w-xl mx-auto mt-5 text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
              Book an appointment to treat your smile today.
            </p>
          </div>

          {/* Contact Card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl bg-white">

            {/* Map */}
            <div className="w-full h-80 sm:h-96 md:h-120 lg:h-128 bg-gray-100 relative group">
              <iframe
                title="Clinic Location"
                src={mapEmbedUrl}
                className="w-full h-full transition-transform duration-700"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />

              {/* Address Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-5 sm:px-6 py-4">
                <a
                  href="https://maps.google.com/?q=Starz+Multi+Specialty+Dental+Care+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                    <MapPin className="w-5 h-5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Our Location
                    </h3>

                    <p className="text-xs sm:text-sm leading-6 text-gray-500 mt-1">
                      Plot No. 28 & 29, Metro Plaza,<br />
                      Behind Balaji Papalal Sweets,<br />
                      Suncity Road, Hyderabad – 500086
                    </p>

                    <span className="inline-flex items-center gap-1 mt-2 text-xs sm:text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all duration-300">
                      Open in Google Maps
                      <span>→</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="divide-y divide-gray-100">

              {/* Office Timings */}
              <div className="group flex items-center gap-4 px-5 sm:px-6 py-5">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <Clock3 className="w-5 h-5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">
                    Office Timings
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-6 whitespace-nowrap">
                    Monday – Saturday (10:00 AM – 9:00 PM)
                  </p>

                  <p className="text-xs sm:text-sm text-gray-500 leading-6 whitespace-nowrap">
                    Sunday (10:30 AM – 4:00 PM)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-center gap-4 px-5 sm:px-6 py-5">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <Mail className="w-5 h-5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">
                    Email Address
                  </h3>

                  <a
                    href="mailto:dr.tabassumfarheen@gmail.com"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  >
                    dr.tabassumfarheen@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-4 px-5 sm:px-6 py-5">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <Phone className="w-5 h-5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">
                    Phone Number
                  </h3>

                  <a
                    href="tel:+914035529975"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  >
                    +91 40 3552 9975
                  </a>
                  <br />
                  <a
                    href="tel:+917013989144"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  >
                    +91 70139 89144
                  </a>
                </div>
              </div>

            </div>

            {/* Button */}
            <div className="border-t border-gray-100 bg-gray-50 p-5 sm:p-6">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full sm:w-auto mx-auto rounded-full bg-blue-600 px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
              >
                Book an Appointment
              </a>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;