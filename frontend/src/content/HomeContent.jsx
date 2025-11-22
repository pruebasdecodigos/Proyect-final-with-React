import { useNavigate } from "react-router-dom";
import imgHero from "../assets/FondoMinecraft.png";
import imgLanding from "../assets/FondoLanding.png";
import imgDev1 from "../assets/Dev1.jpeg";
import imgDev2 from "../assets/Dev2.jpeg";
import DevItem from "../components/Home/InfoDevelopers/DevItem.jsx";

//HomeContent
import "../styles/pages-styles/HomeStyles/HomeSections.css";

import HomeFeaturesSection from "../components/Home/FeaturesSection.jsx";
import HomeLibrarySection from "../components/Home/GameLibrarySection.jsx";
import HomeCommunitySection from "../components/Home/CommunitySection.jsx";

const LandingContent = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div
        className="imglanding"
        style={{
          backgroundImage: `url(${imgLanding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <main className="landing-main">
        {/* Hero Section */}
        <section id="hero-section" className="hero-section">
          <div className="hero-content">
            <h1>
              Bienvenido a <span className="gex">Gex</span>
              <span className="studio">Studio</span>
            </h1>
            <p className="hero-text">
              Explora nuevos mundos de juego. Crea, comparte y experimenta
              videojuegos únicos en nuestra plataforma diseñada para gamers.
            </p>
            <button className="cta-btn" onClick={() => navigate("/main")}>
              Explorar Juegos
            </button>
          </div>
          <div className="hero-image">
            <img src={imgHero} alt="Hero" />
          </div>
        </section>

        {/* About Section */}
        <section id="about-section" className="about-section">
          <div className="tittle-about-we">
            <h2>Sobre Nosotros</h2>
          </div>

          <p className="about-content">
            GexStudio nace de la pasión por los videojuegos y la necesidad de
            crear un espacio donde los jugadores puedan compartir sus
            experiencias. Nuestra misión es construir la mejor plataforma para
            la comunidad gamer, donde la creatividad y la innovación se unen
            para crear experiencias únicas.
          </p>

          {/* Developers Section */}
          <section className="dev-section">
            <DevItem
              direction="left"
              name="Duvan Altamar"
              role="Frontend Developer · Full Stack · CSS Enthusiast"
              quote="Mi pasión es crear interfaces..."
              image={imgDev1}
            />
            <DevItem
              direction="right"
              name="Lia"
              role="Backend Developer · Full Stack Engineer"
              quote="La arquitectura del backend es como un arte invisible: cuando está bien hecha, todo fluye sin esfuerzo. Mi objetivo es crear sistemas robustos y escalables."
              image={imgDev2}
            />
          </section>
        </section>

        <div className="HomeContent">
          <div id="FeaturesLandingSection" className="FeaturesLandingSection">
            <HomeFeaturesSection />
          </div>

          <div id="LibraryLandingSection" className="LibraryLandingSection">
            <HomeLibrarySection />
          </div>

          <div id="CommunityLandingSection" className="CommunityLandingSection">
            <HomeCommunitySection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingContent;

/*===================  
   Terminado :D
===================*/
