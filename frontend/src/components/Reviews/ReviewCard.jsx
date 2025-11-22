import React from "react";

const ReviewCard = ({ review, onDelete }) => {
  return (
    <div className="review-card">
      <button className="delete-btn" onClick={() => onDelete(review._id)}>
        Eliminar
      </button>
      <div className="review-header">
        <div className="review-puntuacion">
          {Array.from({ length: review.puntuacion }, (_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <div className="review-dificultad">{review.dificultad}</div>
      </div>
      <p className="review-text">{review.textoResena}</p>
      <p className="review-recomienda">Recomienda: {review.recomendaria ? "Sí" : "No"}</p>
    </div>
  );
};

export default ReviewCard;
