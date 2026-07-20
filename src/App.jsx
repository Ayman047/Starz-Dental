import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Dashboard from "./pages/dashboard/Dashboard";
import Patients from "./pages/dashboard/Patients";

import ScrollToTop from "./components/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    </>
  );
}

export default App;