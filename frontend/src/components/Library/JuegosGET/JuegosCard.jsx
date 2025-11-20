import React from "react";
import "../../../styles/pages-styles/LibraryStyles/JuegosGET/JuegoCard.css";

const JuegoCard = ({ juego, onOpenModal }) => {
  return (
    <div className="JuegoCard" onClick={() => onOpenModal(juego)}>
      <img src={juego.imagenPortada} alt={juego.titulo} />
      <h2>{juego.titulo}</h2>
      <p><strong>Género:</strong> {juego.genero}</p>
      <p><strong>Plataforma:</strong> {juego.plataforma}</p>
      <p><strong>Año:</strong> {juego.añoLanzamiento}</p>
      <p className="desc">{juego.descripcion}</p>
    </div>
  );
};

export default JuegoCard;
