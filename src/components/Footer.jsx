import "../styles/Footer.css";

function Footer() {
  const handleScrollToDevelopers = (e) => {
    e.preventDefault();
    const targetId = "about-section";
    const isLanding = window.location.pathname === "/";

    if (isLanding) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${targetId}`;
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
            <li><a href="/main">Inicio</a></li>
            <li><a href="/library">Biblioteca</a></li>
            <li><a href="/trending">Tendencias</a></li>
            <li><a href="/community">Comunidad</a></li>
          </ul>
        </div>

        {/* Sección Acerca */}
        <div className="footer-section">
          <h3>Acerca</h3>
          <ul>
            <li>
              <a href="/#about-section" onClick={handleScrollToDevelopers}>
                Sobre Nosotros
              </a>
            </li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/support">Soporte</a></li>
            <li><a href="/terms">Términos</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section social">
          <h3>Conéctate</h3>
          <div className="social-links">
            <a href="#"><i className="fa-brands fa-discord"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
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

/*==============
  Terminado :D
==============*/