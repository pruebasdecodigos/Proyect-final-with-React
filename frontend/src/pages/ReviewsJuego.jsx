import React from "react";
import { useParams } from "react-router-dom";
import ReviewsContentWrapper from "../content/ReviewsContentWrapper.jsx";
import Header from "../components/common/Header.jsx";

const ReviewsJuego = () => {
  const { juegoId } = useParams();

  // Nombre del juego temporal
  const juegoNombre = `Juego ${juegoId}`;

  return (
    <>
    <Header menuType="main" className="header-vertical"/>
    <ReviewsContentWrapper juegoId={juegoId} juegoNombre={juegoNombre} />
    </>
      )
};

export default ReviewsJuego;
