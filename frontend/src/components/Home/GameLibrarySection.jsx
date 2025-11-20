import "../../styles/pages-styles/HomeStyles/HomeSections.css";
import "../../styles/pages-styles/HomeStyles/HomeLibrary.css";

export default function GameLibrarySection() {
  return (
    <div className="HomeSections">
<section className="HomeSections__gameLibrary">
      <h1 className="HomeSections__title">
        Your Personal <span className="HomeSections__highlight">Game Library</span>
      </h1>
      <p>
        Organize your entire gaming collection in one place. Track your
        progress, rate your experiences, and never lose track of what to
        play next. Your online game library adapts to your gaming style.
      </p>

      <div className="GameContainer">
        {/* Pendiente agregar el código aquí */}
      </div>

      <p>
        <strong>Ready to Build Your Ultimate Gaming Collection?</strong>
      </p>
      <h3 className="HomeSections__subtitle">
        Join thousands of gamers who trust GexStudio to manage their video
        game tracker and discover their next favorite title.
      </h3>

      <button className="HomeSections__button--primary">Sign Up Free</button>
      <button className="HomeSections__button--secondary">Log In</button>
    </section>
    </div>
    
  );
}
