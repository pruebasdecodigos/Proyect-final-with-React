import { useNavigate } from "react-router-dom";
import "../styles/LandingContent.css";
import Header from "../components/Header";
import LandingContent from "../content/LandingContent.jsx";


const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
       <Header />
       <LandingContent />
    </div>
  );
};

export default Landing;
