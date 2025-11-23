import "../../styles/Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleScrollToHero = (e) => {
    e.preventDefault();
    const targetId = "hero-section";
    const isLanding = window.location.pathname === "/";

    if (isLanding) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const handleScrollToDevelopers = (e) => {
    e.preventDefault();
    const targetId = "about-section";
    const isLanding = window.location.pathname === "/";

    if (isLanding) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const handleScrollToMain = (e) => {
    e.preventDefault();
    const isMain = window.location.pathname === "/main";

    if (isMain) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/main");
    }
  };

  return (
    <footer className="footer-gametracker">
      <div className="footer-container">
        {/* Logo y descripción */}
        <div className="footer-section">
          <h2 className="footer-logo">
            GameTracker<span className="dot">.</span>
          </h2>
          <p className="footer-description">
            Tu biblioteca gamer central. Descubre, organiza y sigue tus juegos favoritos.
          </p>
        </div>

        {/* Sección Explorar */}
        <div className="footer-section">
          <h3>Explorar</h3>
          <ul>
            <li><button onClick={handleScrollToHero}>Inicio</button></li>
            <li><button onClick={handleScrollToMain}>Biblioteca</button></li>
          </ul>
        </div>

        {/* Sección Acerca */}
        <div className="footer-section">
          <h3>Acerca</h3>
          <ul>
            <li><button onClick={handleScrollToDevelopers}>Sobre Nosotros</button></li>
            <li><button onClick={() => navigate("/contact")}>Contacto</button></li>
            <li><button onClick={() => navigate("/support")}>Soporte</button></li>
            <li><button onClick={() => navigate("/terms")}>Términos</button></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section social">
          <h3>Conéctate</h3>
          <div className="social-links">
            <a href="https://discord.gg/g7Ht95rd" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="https://github.com/pruebasdecodigos" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://x.com/__Duvan" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.youtube.com/@fundacionrofe-tocaunavida7147" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/duvanltbaq/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/duvan.altamar.77/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} GameTracker — Don’t just play. Track it 🎮
        </p>
      </div>
    </footer>
  );
}

export default Footer;
