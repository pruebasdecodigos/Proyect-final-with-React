import React, { useState } from "react";
import "./../styles/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero-section') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="landing-header"> 
      <h1 className="logo"><span className="gex">Gex</span><span className="studio">Studio</span></h1>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('hero-section')}>Inicio</li>
          <li onClick={() => scrollToSection('about-section')}>Desarrolladores</li>
          <li><button className="open-btn" onClick={() => navigate("/main")}>Open GexStudio</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
