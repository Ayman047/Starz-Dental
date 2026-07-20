import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BOOKING_URL } from "../constants/link";
import homepageDoctor1 from "../assets/homepage_doctor_1.png";
import rootCanalIcon from "../assets/root_canal_teeth.png";
import implantIcon from "../assets/dental_implant.png";
import smileDesignIcon from "../assets/smile_design.png";
import whyChooseUs from "../assets/why_choose_us.png";
import reviews from "../data/reviews";
import perfectSmile from "../assets/smile.png";
import implantologistImg from "../assets/implantologist.png";
import pedodontistImg from "../assets/pedodontist.png";
import genDentistImg from "../assets/general_dentist.png";
import omsImg from "../assets/OMS.png";
import { motion } from "framer-motion";

const Home = () => {
  const [reviewPage, setReviewPage] = useState(0);
  const constraintsRef = useRef(null);

  const displayedReviews =
    reviewPage === 0
      ? reviews.slice(0, 3)
      : [
          ...reviews.slice(3, 5),
          {
            isViewMore: true,
          },
        ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      <Navbar />

      {/* MAIN CONTAINER MATCHING ABOUT.JSX */}
      <main className="flex-1 w-full">

        {/* HERO SECTION */}
        <header className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-8 md:pt-10 pb-16 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="w-full md:w-1/2 space-y-6 z-10 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Get Ready For Your Best Ever{" "} <br />
              <span className="hero-glow text-blue-600">
                Dental Experience!
              </span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto md:mx-0">
              We use only the best quality materials on the market in order to provide
              the best products to our patients, so don't worry about anything and
              book yourself.
            </p>

            <div className="pt-2 md:pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Book an Appointment
              </a>
            </div>

            {/* Stats Cards */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
                <p className="text-2xl font-bold text-blue-600">5000+</p>
                <p className="text-sm text-gray-500">Happy Patients</p>
              </div>
              <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
                <p className="text-2xl font-bold text-blue-600">10+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
                <p className="text-2xl font-bold text-blue-600">5.0★</p>
                <p className="text-sm text-gray-500">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-2 border-dashed border-blue-200 p-4 animate-[float_6s_ease-in-out_infinite]">
              <div className="w-full h-full rounded-full bg-blue-50 overflow-hidden">
                <img
                  src={homepageDoctor1}
                  alt="Smiling Dentist"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute top-10 right-0 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 left-0 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </header>

        {/* SERVICES CARDS */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative -mt-10 md:-mt-20 z-10">
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="bg-blue-50 rounded-3xl p-5 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 shadow-lg"
          >
            {[
              {
                title: "Root Canal Treatment",
                icon: rootCanalIcon,
                description:
                  "Root canal treatment (endodontics) is used to remove infection from inside a tooth while preserving its natural structure.",
                link: "https://www.aae.org/patients/root-canal-treatment/what-is-a-root-canal/",
              },
              {
                title: "Smile Design",
                icon: smileDesignIcon,
                description:
                  "Enhance your smile with modern cosmetic dentistry including veneers, whitening, and complete smile makeovers.",
                link: "https://www.drocascante.com/blog/what-is-smile-design/",
              },
              {
                title: "Dental Implants",
                icon: implantIcon,
                description:
                  "Replace missing teeth permanently with durable, natural-looking dental implants for a confident smile.",
                link: "https://my.clevelandclinic.org/health/treatments/10903-dental-implants",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 sm:p-8 rounded-3xl shadow-md text-center border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                </div>

                <h3 className="font-bold text-lg sm:text-xl mb-3">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-500 mb-5 leading-6">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 text-sm sm:text-base font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-blue-50 mt-16 md:mt-20 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96 bg-gray-200">
                <img
                  src={whyChooseUs}
                  alt="Dr. Tabassum treating a patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Choose Starz Dental Care?
              </h2>

              <p className="text-gray-500 text-base sm:text-lg">
                From routine check-ups to advanced dental treatments, our experienced
                team is committed to providing comfortable, personalized care using
                modern technology.
              </p>

              <ul className="space-y-3 text-left mx-auto md:mx-0 max-w-sm">
                {[
                  "Top quality dental team",
                  "State of the art dental services",
                  "Discount on all dental treatment",
                  "Enrollment is quick and easy",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm sm:text-base font-medium text-gray-700"
                  >
                    <span className="text-blue-600 mr-3 text-lg">✔</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition mt-2"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </section>

        {/* PRECISE SMILE */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Leave Your Worries At The
              <br />
              Door And Enjoy A Healthier,
              <br />
              More{" "}
              <span className="relative inline-block text-blue-600">
                Precise Smile
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9 C40 2, 80 12, 120 7 S170 3,198 8"
                    stroke="#60A5FA"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-gray-500 text-base sm:text-lg">
              Enjoy a stress-free dental experience with customized treatments, experienced
              professionals, and a welcoming environment designed around your comfort.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition"
            >
              Book an Appointment
            </a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute top-4 -right-4 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
              <img
                src={perfectSmile}
                alt="Perfect Smile"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* SPECIALISTS */}
        <section className="bg-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Meet Our Specialists</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Experienced professionals dedicated to providing gentle, personalized dental care for every smile.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Tabassum",
                  role: "General Dentist",
                  img: genDentistImg,
                },
                {
                  name: "Dr. David Leninson",
                  role: "Implantologist",
                  img: implantologistImg,
                },
                {
                  name: "Dr. P. V. Sonika Reddy",
                  role: "Pedodontist",
                  img: pedodontistImg,
                },
                {
                  name: "Dr. Arshiya s.",
                  role: "Oral Maxillofacial Surgeon",
                  img: omsImg
                },
              ].map((doc, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition relative group">
                  <img src={doc.img} alt={doc.name} className="w-full h-80 object-cover bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 w-full bg-linear-to-t from-blue-900/80 to-transparent p-4">
                    <h3 className="text-white font-bold">{doc.name}</h3>
                    <p className="text-blue-100 text-sm">{doc.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          data-aos="fade-up"
          data-aos-duration="900"
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 text-center"
        >
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Hear From Our{" "}
              <span className="relative inline-block text-blue-600">
                Happy Patients
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full"
                  height="12"
                  viewBox="0 0 220 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 2 95 2 140 7C170 10 195 8 217 5"
                    stroke="#93C5FD"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mt-5 md:mt-6 leading-7 sm:leading-8">
              Genuine Google reviews from patients who trusted Starz Dental Care with
              their smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedReviews.map((review, index) =>
              review.isViewMore ? (
                <div
                  key="view-more"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="rounded-3xl bg-linear-to-br from-blue-600 to-blue-700 text-white p-8 shadow-xl h-85 flex flex-col justify-center items-center text-center"
                >
                  <div className="text-5xl mb-5">⭐</div>

                  <h3 className="text-2xl font-bold mb-3">
                    Read More Reviews
                  </h3>

                  <p className="text-blue-100 leading-7 mb-8">
                    Discover what more patients have to say about their experience at
                    Starz Multi Specialty Dental Care.
                  </p>

                  <a
                    href="https://www.google.com/search?q=starz+dental+care&ie=UTF-8#lrd=0x3bcb966fff9f67a1:0x28c9db057cacb0a9,1,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                  >
                    View Google Reviews →
                  </a>
                </div>
              ) : (
                <div
                  key={review.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left h-85 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                    />

                    <div>
                      <h4 className="font-bold text-gray-900">
                        {review.name}
                      </h4>

                      <div className="text-yellow-400 tracking-wide">
                        {"★".repeat(review.rating)}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-7 text-sm flex-1">
                    "{review.review}"
                  </p>
                </div>
              )
            )}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => setReviewPage(0)}
              disabled={reviewPage === 0}
              className={`w-11 h-11 rounded-full transition-all duration-300 ${
                reviewPage === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:scale-110 text-white"
              }`}
            >
              ←
            </button>

            <button
              onClick={() => setReviewPage(1)}
              disabled={reviewPage === 1}
              className={`w-11 h-11 rounded-full transition-all duration-300 ${
                reviewPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:scale-110 text-white"
              }`}
            >
              →
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;