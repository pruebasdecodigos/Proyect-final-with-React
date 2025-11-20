import React, { useState } from "react";
import "../../../styles/pages-styles/LibraryStyles/JuegosGET/JuegoCard.css";

const JuegoCard = ({ juego, updateGame, onOpenModal }) => {
  const [inputHours, setInputHours] = useState("");

  const handleAddHours = () => {
    const hours = parseInt(inputHours, 10);
    if (!isNaN(hours) && hours > 0) {
      updateGame(juego._id, { hoursPlayed: (juego.hoursPlayed || 0) + hours });
      setInputHours("");
    }
  };

  const handleStatusChange = (e) => {
    updateGame(juego._id, { status: e.target.value });
  };

  return (
    <div className="JuegoCard">
      <img src={juego.imagenPortada} alt={juego.titulo} />
      <h2>{juego.titulo}</h2>
      <p><strong>Género:</strong> {juego.genero}</p>
      <p><strong>Plataforma:</strong> {juego.plataforma}</p>
      <p><strong>Año:</strong> {juego.añoLanzamiento}</p>
      <p className="desc">{juego.descripcion}</p>

      {/* 
      <div className="JuegoCard__actions">
        <input
          type="number"
          placeholder="Añadir horas"
          value={inputHours}
          onChange={(e) => setInputHours(e.target.value)}
          min="1"
        />
        <button onClick={handleAddHours}>Añadir</button>
      <select value={juego.status || "not playing"} onChange={handleStatusChange}>
          <option value="not playing">No jugando</option>
          <option value="playing">En progreso</option>
          <option value="completed">Completado</option>
      </select> 
      </div>

        */}
    </div>
  );
};

export default JuegoCard;
