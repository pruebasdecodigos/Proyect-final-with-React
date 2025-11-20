import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx"
import "../styles/header/HeaderVertical.css";
import BibliotecaContent from "../content/BibliotecaContent.jsx";

export default function MainLayout() {
  return (
    <div>
      <Header menuType="main" className="header-vertical" />
      <BibliotecaContent />
 
    </div>
  );
}
