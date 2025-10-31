import "../styles/Footer.css"

function Footer() {
    return (
         <footer className="footer">
      <div className="footer-content">
        <h3>GameTracker</h3>
        <p>Tu biblioteca personal de videojuegos</p>

        <div className="footer-links">
          <a href="#">Inicio</a>
          <a href="#">Biblioteca</a>
          <a href="#">Reseñas</a>
          <a href="#">Contacto</a>
        </div>

        <small>© {new Date().getFullYear()} GameTracker - Todos los derechos reservados</small>
      </div>
    </footer>
  );
}

export default Footer;