import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import rootCanalIcon from "../assets/root_canal_teeth.png";
import implantIcon from "../assets/dental_implant.png";
import smileDesignIcon from "../assets/smile_design.png";
import whiteningIcon from "../assets/tooth_white.png";
import emergencyIcon from "../assets/emergency.png";
import preventionIcon from "../assets/prevention.png";
import jewelryIcon from "../assets/teeth_jewel.png";
import extractionIcon from "../assets/tooth_extraction.png";
import bracesIcon from "../assets/braces.png";
import { BOOKING_URL } from "../constants/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  const bookingUrl = "https://www.justdial.com/online-consult/bookslot?docid=040PXX40.XX40.210813101755.C6C4&source=77&version=3.1&wap=77&action=BA&parentid=&extRdt=1&wkwebview=1&ll=dtlpg&ncatid=&position=footer_Overview_Book+Appointment&pagename=dtlpg&leadtype=Book+Appointment&bd=2&city=Hyderabad&area=&bcity=Hyderabad&barea=Suncity-Langar+House&pncdbd=&bpncdbd=500008&paidstatus=0&misc=0&hncatid=11273042&search=Starz-Dental-Hospital-Opposite-More-Super-Market-Suncity-Langar-House&did=040PXX40.XX40.210813101755.C6C4&ask_mobile=1&case=sms_email&frmpg=dtlpg&hncatid_name=Dental+Hospitals";

  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  const services = [
    {
      title: "Root Canal Treatment",
      icon: rootCanalIcon,
      desc: "Root canal treatment removes infection from inside a tooth while preserving its natural structure.",
      link: "https://www.aae.org/patients/root-canal-treatment/what-is-a-root-canal/",
    },
    {
      title: "Smile Design",
      icon: smileDesignIcon,
      desc: "Enhance your smile with veneers, whitening and complete smile makeovers.",
      link: "https://www.drocascante.com/blog/what-is-smile-design/",
    },
    {
      title: "Dental Implants",
      icon: implantIcon,
      desc: "Replace missing teeth permanently with durable, natural-looking dental implants.",
      link: "https://my.clevelandclinic.org/health/treatments/10903-dental-implants",
    },
    {
      title: "Teeth Whitening",
      icon: whiteningIcon,
      desc: "Professional whitening safely brightens stained or discolored teeth for a confident smile.",
      link: "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/teeth-whitening",
    },
    {
      title: "Emergency Dentistry",
      icon: emergencyIcon,
      desc: "Immediate dental care for severe pain, broken teeth, swelling and other dental emergencies.",
      link: "https://my.clevelandclinic.org/health/articles/11368--dental-emergencies-what-to-do",
    },
    {
      title: "Preventive Dentistry",
      icon: preventionIcon,
      desc: "Routine checkups, cleanings and preventive care help maintain excellent oral health.",
      link: "https://www.healthline.com/health/preventative-dentistry",
    },
    {
      title: "Dental Jewellery",
      icon: jewelryIcon,
      desc: "Cosmetic tooth jewellery is bonded safely onto the tooth without drilling or damaging enamel.",
      link: "https://www.ada.org/resources/ada-library/oral-health-topics/oral-piercing-jewelry",
    },
    {
      title: "Tooth Extraction",
      icon: extractionIcon,
      desc: "Safe and painless removal of damaged, decayed or impacted teeth using modern techniques.",
      link: "https://my.clevelandclinic.org/health/treatments/22120-tooth-extraction",
    },
    {
      title: "Braces & Aligners",
      icon: bracesIcon,
      desc: "Orthodontic treatment aligns teeth and improves bite using braces or clear aligners.",
      link: "https://my.clevelandclinic.org/health/treatments/24285-orthodontics",
    },
  ];

  const doctors = [
    { name: 'Jim Carry', role: 'Orthodontist' },
    { name: 'Wade Warren', role: 'Endodontist' },
    { name: 'Jenny Wilson', role: 'Periodontist' },
    { name: 'Jacob Jones', role: 'Pediatric Dentist' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      <Navbar />

      {/* MAIN CONTAINER TO MATCH ABOUT.JSX LAYOUT STRUCTURE */}
      <main className="flex-1 w-full">

        {/* ── SERVICES HEADER ── */}
        <section className="bg-linear-to-b from-blue-50 to-white pt-16 md:pt-20 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
              Our{" "}
              <span className="relative inline-block text-blue-600">
                Dental Services
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
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
              Comprehensive dental treatments designed to restore, enhance and
              maintain healthy, confident smiles using modern technology and
              personalized care—all under one roof.
            </p>
          </div>
        </section>

        {/* ───────────── SERVICES GRID ───────────── */}
        <section className="bg-linear-to-b from-blue-50 via-white to-blue-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            {/* ================= MOBILE / TABLET SWIPER ================= */}
            <div className="block lg:hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1.1}
                centeredSlides
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 1800,
                  disableOnInteraction: false,
                }}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="group relative overflow-hidden rounded-3xl bg-white border border-blue-100 p-6 shadow-md transition-all duration-500">
                      <div className="absolute top-0 left-0 h-1 w-full bg-blue-600"></div>

                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-100 to-blue-50">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-16 h-16 object-contain"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-center text-gray-500 leading-7 min-h-30">
                        {service.desc}
                      </p>

                      <div className="mt-8 text-center">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold transition-all hover:bg-blue-700"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* ================= DESKTOP GRID ================= */}
            <div className="hidden lg:grid grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-blue-100 p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>

                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-100 to-blue-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-center text-gray-500 leading-7 min-h-30">
                    {service.desc}
                  </p>

                  <div className="mt-8 text-center">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:gap-3"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ───────────── MORE SERVICES CTA ───────────── */}
        <section
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
          className="py-20 bg-white"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="flex items-center justify-center mb-8"
            >
              <div className="h-px w-24 bg-blue-200"></div>

              <div className="mx-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                <span className="text-2xl">🔎</span>
              </div>

              <div className="h-px w-24 bg-blue-200"></div>
            </div>

            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl font-extrabold text-gray-900"
            >
              Looking for another treatment?
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-5 text-gray-500 text-lg leading-8 max-w-2xl mx-auto"
            >
              Our experienced dentists provide many additional preventive,
              restorative, cosmetic, and specialized dental treatments tailored
              to your individual needs.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="mt-10"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Book a Consultation
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Services;