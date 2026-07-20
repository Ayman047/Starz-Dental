import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Go to the top of the page
    window.scrollTo(0, 0);

    // Refresh AOS after the page has rendered
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;