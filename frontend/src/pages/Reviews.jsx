import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx"
import "../styles/header/HeaderVertical.css";
import ReviewsContent from "../content/ReviewsContent.jsx";

export default function Reviews() {
  return (
    <div>
      <Header menuType="main" className="header-vertical" />
      <ReviewsContent />
      <Footer />
 
    </div>
  );
}