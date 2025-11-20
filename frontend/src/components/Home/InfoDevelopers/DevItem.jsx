import React from "react";
import CloudFrame from "../../Home/InfoDevelopers/CloudFrame.jsx";
import "../../../styles/landingContent/DevItem.css";

export default function DevItem({ direction, name, role, quote, image }) {
  const isLeft = direction === "left";

  return (
    <div className={`dev-item ${isLeft ? "dev-left" : "dev-right"}`}>
      {isLeft && <CloudFrame src={image} direction="left" />}

      <div className="dev-info">
        <h3>{name}</h3>
        <p className="dev-role">{role}</p>
        <blockquote className="dev-quote">{quote}</blockquote>
      </div>

      {!isLeft && <CloudFrame src={image} direction="right" />}
    </div>
  );
}

/*===================  
   Terminado :D
===================*/