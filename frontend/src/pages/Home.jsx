import { useEffect } from "react";
import "../styles/HomeContent.css";
import Header from "../components/common/Header.jsx";
import LandingContent from "../content/HomeContent.jsx";


const Landing = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 400);
      }
    }
  }, []);

  return (
    <div className="landing">
      <Header />
      <LandingContent />
    </div>
  );
};

export default Landing;

