import React from "react";
import ReviewsContent from "../components/Reviews/ReviewsContent.jsx";

const ReviewsContentWrapper = ({ juegoId, juegoNombre }) => {
  return <ReviewsContent juegoId={juegoId} juegoNombre={juegoNombre} />;
};

export default ReviewsContentWrapper;
