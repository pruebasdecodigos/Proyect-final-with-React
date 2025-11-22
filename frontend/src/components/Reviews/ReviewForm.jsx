import React, { useState } from "react";
import { crearReviewJuego } from "../../services/reviewsServices.js";
import "../../styles/reviews/ReviewsStyles.css";

const ReviewForm = ({ juegoId, juegoNombre, onReviewCreated }) => {
  const [textoResena, setTextoResena] = useState("");
  const [puntuacion, setPuntuacion] = useState(0);
  const [dificultad, setDificultad] = useState("Normal");
  const [recomendaria, setRecomendaria] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!textoResena || !puntuacion || recomendaria === null) {
      alert("Completa todos los campos");
      return;
    }

    const reviewData = {
      juegoId,
      juego: juegoNombre,
      textoResena,
      puntuacion,
      dificultad,
      recomendaria,
    };

    await crearReviewJuego(reviewData);
    setTextoResena("");
    setPuntuacion(0);
    setDificultad("Normal");
    setRecomendaria(null);
    onReviewCreated();
  };

  return (
    <div className="review-form-card">
      <h3>Escribe tu reseña</h3>
      <form className="review-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Escribe tu reseña..."
          value={textoResena}
          onChange={(e) => setTextoResena(e.target.value)}
        />

        <label>Puntuación:</label>
        <select value={puntuacion} onChange={(e) => setPuntuacion(Number(e.target.value))}>
          <option value={1}>1 ⭐</option>
          <option value={2}>2 ⭐</option>
          <option value={3}>3 ⭐</option>
          <option value={4}>4 ⭐</option>
          <option value={5}>5 ⭐</option>
        </select>

        <label>Dificultad:</label>
        <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
          <option value="Fácil">Fácil</option>
          <option value="Normal">Normal</option>
          <option value="Difícil">Difícil</option>
        </select>

        <div className="recomendaria">
          <label>¿Recomendarías este juego?</label>
          <div className="recomendaria-buttons">
            <button
              type="button"
              className={recomendaria === true ? "selected" : ""}
              onClick={() => setRecomendaria(true)}
            >
              Sí
            </button>
            <button
              type="button"
              className={recomendaria === false ? "selected" : ""}
              onClick={() => setRecomendaria(false)}
            >
              No
            </button>
          </div>
        </div>

        <button type="submit">Enviar Reseña</button>
      </form>
    </div>
  );
};

export default ReviewForm;
