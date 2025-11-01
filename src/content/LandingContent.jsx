import { useNavigate } from "react-router-dom";
import "../styles/LandingContent.css";
import imgHero from "../assets/FondoMinecraft.png";
import imgLanding from "../assets/FondoLanding.png";
import imgDev1 from "../assets/dev1.jpeg";
import imgDev2 from "../assets/dev2.png";
import CardAnimada from "../components/CardAnimada";
import CloudFrame from "../components/CloudFrame";
<CloudFrame src={imgDev1} alt="Duvan Romero" width="350px" height="250px" />
import DevItem from "../components/DevItem";



const LandingContent = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="imglanding" style={{ 
          backgroundImage: `url(${imgLanding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    <main className="landing-main">
            <section id="hero-section" className="hero-section">
            <div className="hero-content">
                <h1>Bienvenido a <span className="gex">Gex</span><span className="studio">Studio</span></h1>
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

            <section id="about-section" className="about-section">
            <div className="tittle-about-we">
                <h2>Sobre Nosotros</h2>
            </div>
            
            <p className="about-content">
                GexStudio nace de la pasión por los videojuegos y la necesidad de crear
                un espacio donde los jugadores puedan compartir sus experiencias.
                Nuestra misión es construir la mejor plataforma para la comunidad gamer,
                donde la creatividad y la innovación se unen para crear experiencias únicas.
            </p>

        <section className="dev-section">
            <h2 className="dev-title">Nuestro Equipo</h2>
                <DevItem
                    direction="left"
                    name="Duvan Altamar"
                    role="Frontend Developer · Full Stack · CSS Enthusiast"
                    quote="Mi pasión es crear interfaces que no solo sean funcionales sino también hermosas. Cada línea de código es una oportunidad para innovar y sorprender."
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
    </main>
</div>
  );
};

export default LandingContent;
