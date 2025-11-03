import "../styles/home.css";
import FondoMainLayout from "../assets/FondoLanding.png";

function MainLayoutContent() {
  return <div>
    <div className="imglanding" style={{
          backgroundImage: `url(${FondoMainLayout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
  </div>;
}

export default MainLayoutContent;
