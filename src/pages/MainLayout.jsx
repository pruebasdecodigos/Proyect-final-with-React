import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Resenas from "../components/resenas/Resenas.jsx";
import MainLayoutContent from "../content/MainLayoutContent.jsx"
import "../styles/pages-styles/MainLayout.css";

function MainLayout() {
  return (
    <div>
      <Header menuType="main" className="header-vertical" />
      <div className="main-content">
      <MainLayoutContent/>
      <Footer />
      </div>
    </div>
  );
}

export default MainLayout;

/*===================  
   Terminado :D
===================*/
