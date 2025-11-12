import React, { useEffect } from "react";
import "../styles/Community.css";

function CommunityCard() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    cards.forEach((card) => card.addEventListener("mousemove", handleMouseMove));

    return () => {
      cards.forEach((card) => card.removeEventListener("mousemove", handleMouseMove));
    };
  }, []);

  return (
    <section id="community-section" className="community-section">
      <h2 className="community-title">Nuestra Comunidad</h2>
      <div id="cards">
        <div className="card">
          <div className="card_content">
            <i className="fa-brands fa-instagram"></i>
            <h2>Instagram</h2>
            <p>Followers: <span>625k</span></p>
            <a href="#"><i className="fa-solid fa-link"></i> <span>Follow me</span></a>
          </div>
        </div>

        <div className="card">
          <div className="card_content">
            <i className="fa-brands fa-github"></i>
            <h2>Github</h2>
            <p>Followers: <span>150k</span></p>
            <a href="#"><i className="fa-solid fa-link"></i> <span>Follow me</span></a>
          </div>
        </div>

        <div className="card">
          <div className="card_content">
            <i className="fa-brands fa-linkedin"></i>
            <h2>Linkedin</h2>
            <p>Connections: <span>100k</span></p>
            <a href="#"><i className="fa-solid fa-link"></i> <span>Connect</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityCard;

/*===================  
   Terminado :D
===================*/