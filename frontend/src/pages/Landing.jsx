import { useEffect } from "react";
import "../styles/LandingContent.css";
import Header from "../components/Header.jsx";
import LandingContent from "../content/LandingContent.jsx";

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

/* =================
 Terminado :D
==================*/
