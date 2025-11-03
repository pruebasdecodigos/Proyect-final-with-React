import Header from "../components/Header.jsx";
import Resenas from "../components/resenas/Resenas.jsx";
import Footer from "../components/Footer";
import FondoMainLayout from "../assets/FondoLanding.png";
import "../styles/MainLayout.css";

function MainLayout() {
  return (
    <div
      className="main-layout"
      style={{
        backgroundImage: `url(${FondoMainLayout})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header menuType="main" className="header-vertical" />
      <div className="main-content">
        <Resenas />
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;

/*===================  
   Terminado :D
===================*/