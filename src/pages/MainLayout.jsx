import Header from "../components/Header.jsx";
import MainLayoutContent from "../content/MainLayoutContent.jsx";
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
        <MainLayoutContent />
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;

/*===================  
   Terminado :D
===================*/