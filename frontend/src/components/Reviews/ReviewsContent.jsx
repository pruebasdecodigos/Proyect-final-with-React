import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { getReviewsByGame, eliminarReview } from "../../services/reviewsServices.js";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
import "../../styles/reviews/ReviewsStyles.css";

const ReviewsContent = ({ juegoId, juegoNombre }) => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const fetchReviews = async () => {
    const data = await getReviewsByGame(juegoId);
    setReviews(data);
  };

  useEffect(() => { fetchReviews(); }, [juegoId]);

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta reseña?")) {
      await eliminarReview(id);
      fetchReviews();
    }
  };

  const handleBack = () => {
    navigate("/main") 
  }

  return (
    <div className="reviews-container">
      <h2>Reseñas de {juegoNombre}</h2>
      <div className="reviews-layout">
        <div className="reviews-list">
          {reviews.length === 0 ? (
            <p>No hay reseñas aún</p>
          ) : (
            reviews.map((r) => (
              <ReviewCard key={r._id} review={r} onDelete={handleDelete} />
            ))
          )}
          <button className="Back-main" onClick={handleBack}>Volver a Biblioteca</button>
        </div>

        <ReviewForm juegoId={juegoId} juegoNombre={juegoNombre} onReviewCreated={fetchReviews} />
      </div>
    </div>
  );
};

export default ReviewsContent;
