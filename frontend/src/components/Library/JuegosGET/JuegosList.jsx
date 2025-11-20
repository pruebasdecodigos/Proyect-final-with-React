import React, { useEffect, useState } from "react";
import { getJuegos } from "../../../services/juegoService.js";
import JuegoCard from "./JuegosCard.jsx";
import "../../../styles/pages-styles/LibraryStyles/JuegosGET/JuegosList.css";

const JuegosList = ({ filters, onStatsChange }) => {
  const [juegos, setJuegos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getJuegos();
      // Inicializamos horas y status si no existen
      const juegosConExtra = data.map(j => ({
        ...j,
        hoursPlayed: j.hoursPlayed || 0,
        status: j.status || "not playing",
      }));
      setJuegos(juegosConExtra);
      setFiltrados(juegosConExtra);
    };
    load();
  }, []);

  useEffect(() => {
    const { searchText, genero, plataforma } = filters;
    let result = juegos;
    if (searchText) result = result.filter(j => j.titulo.toLowerCase().includes(searchText.toLowerCase()));
    if (genero) result = result.filter(j => j.genero === genero);
    if (plataforma) result = result.filter(j => j.plataforma === plataforma);
    setFiltrados(result);
  }, [filters, juegos]);

  // Función para actualizar un juego
  const updateGame = (id, updates) => {
    setJuegos(prev => {
      const updated = prev.map(j => (j._id === id ? { ...j, ...updates } : j));
      onStatsChange(updated); // enviamos todos los juegos al padre para actualizar HeroCards
      return updated;
    });
  };

  return (
    <div className="JuegosGrid">
      {filtrados.length === 0 ? (
        <p className="JuegosGrid__empty">No hay juegos disponibles.</p>
      ) : (
        filtrados.map(j => (
          <JuegoCard key={j._id} juego={j} updateGame={updateGame} />
        ))
      )}
    </div>
  );
};

export default JuegosList;
