import { useState } from "react";
import "../../styles/pages-styles/LibraryStyles/LibraryContent.css";
import CardsHeroSection from "./HeroSection/HeroCards.jsx";
import TopBar from "./TopBar/TopBar.jsx";
import JuegosList from "./JuegosGET/JuegosList.jsx";

export default function HeroSection() {
  const [filters, setFilters] = useState({
    searchText: "",
    genero: "",
    plataforma: "",
  });

  const [juegosState, setJuegosState] = useState([]);

  return (
    <div>
      <TopBar onFilterChange={setFilters} />

      <div className="LibraryHeroSection">
        <h1 className="LibraryHeroSection__title">Your Game Library</h1>
        <p className="LibraryHeroSection__text">
          Manage your gaming collection, track your progress, and discover your
          next favorite game.
        </p>
        <CardsHeroSection juegos={juegosState} />
      </div>

      <div className="GamesBackend">
        <JuegosList filters={filters} onStatsChange={setJuegosState} />
      </div>
    </div>
  );
}
