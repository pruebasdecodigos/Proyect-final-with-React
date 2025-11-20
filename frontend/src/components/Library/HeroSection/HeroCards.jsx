import "../../../styles/pages-styles/LibraryStyles/CardsHeroSection.css";

export default function CardsHeroSection({ juegos }) {
  const totalGames = juegos.length;
  const currentlyPlaying = juegos.filter(j => j.status === "playing").length;
  const completed = juegos.filter(j => j.status === "completed").length;
  const totalHours = juegos.reduce((sum, j) => sum + (j.hoursPlayed || 0), 0);

  return (
    <div className="LibraryCardsHeroSection">
      <div className="Card1">
        <h2>{totalGames}</h2>
        <small>Total Games</small>
      </div>

      <div className="Card2">
        <h2>{currentlyPlaying}</h2>
        <small>Currently Playing</small>
      </div>

      <div className="Card3">
        <h2>{completed}</h2>
        <small>Completed</small>
      </div>

      <div className="Card4">
        <h2>{totalHours}</h2>
        <small>Hours Played</small>
      </div>
    </div>
  );
}
