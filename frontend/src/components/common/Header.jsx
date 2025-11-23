import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/header/Header.css";

function Header({ menuType = "landing", className = "" }) {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (sectionId === "hero-section") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`landing-header ${className}`}>
      <div>
        <h1 className="logo">
        <span className="gex">Gex</span>
        <span className="studio">Studio</span>
        </h1>
             <div className="div-logo"></div>
      </div>

      <nav>
        {menuType === "landing" ? (
          <ul>
            <li onClick={() => scrollToSection("hero-section")}>Inicio</li>
            <li onClick={() => scrollToSection("about-section")}>Desarrolladores</li>
             <li onClick={() => scrollToSection("FeaturesLandingSection")}>Propuestas</li>
            <li>
              <button className="open-btn" onClick={() => navigate("/main")}>
                Open GexStudio
              </button>
            </li>
          </ul>
        ) : (
          <ul className="TextSecondHeader">
            <li onClick={() => navigate("/main")}>Home</li>
            <li onClick={() => navigate("/#FeaturesLandingSection")}>Propuestas</li>
            <li onClick={() => navigate("/#about-section")}>Desarrolladores</li>
            <li>
              <button className="open-btn" onClick={() => navigate("/")}>
                Volver al Landing
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;

/*===================  
Header terminado, se 
le agrego el "Format 
Document" (2/11/2025)

 Terminado :D
===================*/
