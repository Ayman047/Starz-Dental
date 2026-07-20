import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/about_us.png";
import tech from "../assets/technology_3.png";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

import p1Before from "../assets/p1_b.png";
import p1After from "../assets/p1_a.png";

import p2Before from "../assets/p2_b.png";
import p2After from "../assets/p2_a.png";

import p3Before from "../assets/p3_b.png";
import p3After from "../assets/p3_a.png";

import p4Before from "../assets/p4_b.png";
import p4After from "../assets/p4_a.png";
import { MoveHorizontal } from "lucide-react";

import {
  ScanLine,
  ShieldCheck,
 Wrench,
  ClipboardList,
} from "lucide-react";
const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">

      <Navbar />

    {/* MAIN CONTENT */}
<main className="flex-1 w-full">

  {/* PAGE TITLE */}
  <section className="bg-linear-to-b from-blue-50 to-white pt-16 md:pt-20 pb-12 md:pb-16">

    <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5">

        About{" "}

        <span className="relative inline-block text-blue-600">
          Starz Dental Care

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
        Dedicated to providing advanced, comfortable, and personalized dental
        care for every patient through modern technology and compassionate
        treatment.
      </p>

    </div>

  </section>

  {/* ABOUT + MISSION */}
  <section
    data-aos="fade-up"
    className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-20"
  >

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Image */}
      <div className="order-1">

        <img
          src={aboutImage}
          alt="Starz Dental Care"
          className="rounded-3xl shadow-xl w-full h-auto object-cover"
        />

      </div>

      {/* Content */}
      <div className="order-2">

        <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
          Who We Are
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
  Creating Healthy Smiles{" "}
  <br className="hidden sm:block" />
  With Care You Can Trust
</h2>

        <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mb-6">
          At Starz Dental Care, we believe every smile deserves exceptional
          attention. Our clinic combines experienced professionals, advanced
          technology, and a patient-first approach to provide high-quality
          dental care in a welcoming and comfortable environment.
        </p>

        <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mb-8">
          Whether it's preventive care, cosmetic dentistry, dental implants,
          orthodontics, or emergency treatment, we focus on delivering
          personalized solutions that improve both oral health and confidence.
          Every treatment plan is designed around your unique needs, ensuring
          lasting results and a positive experience from consultation to
          recovery.
        </p>

        {/* Mission Card */}
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-7">
            To provide ethical, affordable, and advanced dental care while
            creating healthy smiles through compassion, innovation, and
            excellence in every treatment we deliver.
          </p>

        </div>

      </div>

    </div>

  </section>
        {/* BEFORE & AFTER SMILE GALLERY */}
{/* BEFORE & AFTER GALLERY */}

<section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24">

  {/* Heading */}
  <div
    data-aos="fade-up"
    className="text-center mb-14 md:mb-20"
  >

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">

      Before{" "}

      <span className="relative inline-block text-blue-600">

        & After

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

    </h2>

    <p className="mt-5 md:mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-7 sm:leading-8">
      Explore real patient transformations achieved through personalized
      treatment plans and advanced dental care at Starz Multi Specialty Dental Care.
    </p>

    {/* Drag Instruction */}

    <div
      data-aos="fade-up"
      data-aos-delay="250"
      className="mt-8 md:mt-10 flex justify-center"
    >

      <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white border border-blue-100 px-4 sm:px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300">

        <MoveHorizontal
          className="animate-[wiggle_1.8s_ease-in-out_infinite] text-blue-600 shrink-0"
          size={20}
        />

        <span className="text-xs sm:text-sm md:text-base font-medium text-gray-600 text-center">
          Swipe to reveal the smile transformation
        </span>

      </div>

    </div>

  </div>

  {[
    {
      title: "Clear Aligner Smile Design",
      before: p1Before,
      after: p1After,
      desc: "Successfully closed spacing between teeth using custom clear aligners, creating a naturally aligned smile while improving overall aesthetics and patient confidence.",
      highlight:
        "Custom clear aligners gradually closed the gaps while maintaining comfort, improving bite alignment, and creating a naturally balanced smile."
    },
    {
      title: "Fixed Partial Denture (FPD)",
      before: p2Before,
      after: p2After,
      desc: "Replacement of a missing tooth with a fixed partial denture, restoring proper chewing function, natural appearance, and long-term smile stability.",
      highlight:
        "The fixed partial denture restored chewing efficiency, preserved neighboring teeth, and blended seamlessly with the patient's natural smile."
    },
    {
      title: "Periodontal Rehabilitation with FPD",
      before: p3Before,
      after: p3After,
      desc: "Advanced periodontal treatment followed by a fixed partial denture to restore gum health and improve both oral function and aesthetics.",
      highlight:
        "Treatment focused on controlling periodontal disease first, followed by functional tooth replacement to ensure long-term oral health and stability."
    },
    {
      title: "Comprehensive Smile Makeover",
      before: p4Before,
      after: p4After,
      desc: "A complete smile transformation achieved through orthodontic treatment with braces combined with dental implants to restore alignment, function, and facial aesthetics.",
      highlight:
        "A multidisciplinary approach combining braces and implants delivered a healthier bite, improved facial harmony, and a confident new smile."
    }
  ].map((item, index) => (

    <div
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 lg:mb-28 ${
        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >

      {/* Compare Image */}

      <div className="w-full max-w-md lg:max-w-125 mx-auto overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-500">

        <div className="aspect-4/5">

<ReactCompareSlider
  itemOne={
    <ReactCompareSliderImage src={item.before} alt="Before" />
  }
  itemTwo={
    <ReactCompareSliderImage src={item.after} alt="After" />
  }
/>

        </div>

      </div>

      {/* Content */}

      <div>

        <div className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-1.5 text-xs sm:text-sm font-semibold mb-5">
          Real Patient Transformation
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
          {item.title}
        </h3>

        <p className="text-gray-500 text-base sm:text-lg leading-7 sm:leading-8">
          {item.desc}
        </p>

        <div className="mt-8 flex items-start gap-3">

          <div className="w-3 h-3 rounded-full bg-green-500 mt-2 shrink-0"></div>

          <span className="text-gray-600 leading-7 text-sm sm:text-base">
            {item.highlight}
          </span>

        </div>

        <div className="mt-8 border-l-4 border-blue-500 bg-blue-50/40 rounded-r-xl pl-5 py-4">

          <p className="text-xs sm:text-sm italic text-gray-500 leading-6 sm:leading-7">
            Images are published with patient consent. Individual treatment outcomes
            may vary depending on oral health conditions, treatment requirements,
            and patient compliance throughout the treatment process.
          </p>

        </div>

      </div>

    </div>

  ))}

</section>

{/* ───────────── ADVANCED TECHNOLOGY ───────────── */}
<section
  data-aos="fade-up"
  className="bg-linear-to-b from-blue-50 to-white py-16 md:py-24 mt-8 md:mt-10"
>

  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

    {/* Heading */}

    <div className="text-center mb-12 md:mb-16">

      <span className="uppercase tracking-[0.25em] md:tracking-[0.3em] text-blue-600 font-semibold text-xs sm:text-sm">
        Modern Dentistry
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">

        Advanced Technology,

        <span className="relative inline-block text-blue-600 lg:ml-3">

          <br className="block lg:hidden" />

          Exceptional Care

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

      <p className="mt-5 md:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
        We combine experienced dental professionals with modern technology to
        provide accurate diagnoses, comfortable treatments, and long-lasting
        results for every patient.
      </p>

    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

      {/* Technology Image */}

      <div
        data-aos="zoom-in"
        className="overflow-hidden rounded-3xl shadow-2xl"
      >

        <img
          src={tech}
          alt="Dental Technology"
          className="w-full h-72 sm:h-96 lg:h-125 object-cover hover:scale-105 transition duration-700"
        />

      </div>

      {/* Features */}

      <div className="space-y-5 sm:space-y-6">

        {[
  {
    icon: ScanLine,
    title: "Digital X-Ray Imaging",
    text: "High-quality imaging with reduced radiation exposure for faster and more accurate diagnosis."
  },
  {
    icon: ShieldCheck,
    title: "Modern Sterilization Protocols",
    text: "Strict sterilization and infection-control procedures ensure a safe clinical environment."
  },
  {
    icon: Wrench,
    title: "Advanced Treatment Equipment",
    text: "Modern dental instruments help deliver minimally invasive and highly precise procedures."
  },
  {
    icon: ClipboardList,
    title: "Personalized Treatment Planning",
    text: "Every patient receives a customized treatment plan designed around their unique oral health needs."
  }
].map((item, index) => (

          <div
            key={index}
            data-aos="fade-left"
            data-aos-delay={index * 120}
            className="group flex gap-4 sm:gap-5 rounded-2xl bg-white p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >

           <div
  className="
  flex items-center justify-center
  w-14 h-14
  rounded-full
  bg-linear-to-br
  from-blue-500
  to-blue-600
  shadow-lg
  shrink-0
  transition-all
  duration-500
  group-hover:from-cyan-500
  group-hover:to-blue-700
  group-hover:rotate-6
  group-hover:scale-110"
>
  <item.icon
    size={26}
    strokeWidth={2.4}
    className="text-white"
  />
</div>

            <div>

              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-500 leading-7">
                {item.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>

        {/* SECTION 4: SERVICES HIGHLIGHT (Dark Background) */}
       {/* <section className="bg-[#0f172a] mt-16 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
            {/*  <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-500">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Root Canal Treatment</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  Root canal numbers determined. A<br/>referred individual awaits read<br/>adopted at the paths of a cure.
                </p>
                <a href="#" className="text-xs font-semibold text-gray-900 flex items-center gap-1 hover:text-blue-600 transition">
                  Learn More <span>→</span>
                </a>
              </div>

              {/* Card 2 */}
            {/*  <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Cosmetic Dentist</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  Cosmetic dentist puts forward a<br/>beautiful line of view in obtaining<br/>the splint step of your teeth.
                </p>
                <a href="#" className="text-xs font-semibold text-gray-900 flex items-center gap-1 hover:text-blue-600 transition">
                  Learn More <span>→</span>
                </a>
              </div>

              {/* Card 3 */}
             {/* <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Dental Implants</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  A Dental Specialist will definitely<br/>see that cuts behind your jaw a<br/>fluid a poignant short strategy.
                </p>
                <a href="#" className="text-xs font-semibold text-gray-900 flex items-center gap-1 hover:text-blue-600 transition">
                  Learn More <span>→</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: CTA / VIDEO SECTION */}
       {/* <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              We're Welcoming New Patients<br/>And Can't Wait To Meet You.
            </h2>
            <p className="text-gray-500 text-sm mb-12">
              We provide the best quality and help be featured in<br/>each fit predict the best support Doctor patents.
            </p>

            {/* Video Placeholder */}
            {/* <div className="relative w-full h-100 bg-gray-200 rounded-3xl overflow-hidden shadow-md flex items-center justify-center text-gray-400 mb-10 group cursor-pointer">
              [ Video Thumbnail Placeholder - ~1000x500 ]
              
              {/* Play Button Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition shadow-lg shadow-blue-200">
              Book Appoitment
            </button>
          </div>
        </section> */}
      </main>
        <Footer />
    </div>
  );
};

export default About;