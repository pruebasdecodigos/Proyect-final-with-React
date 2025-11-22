import React, { useState } from "react";
import "../../styles/reviews/ReviewsStyles.css";

const StarsRating = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="stars-container">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          className={num <= (hoverValue || value) ? "star selected" : "star"}
          onClick={() => onChange(num)}
          onMouseEnter={() => setHoverValue(num)}
          onMouseLeave={() => setHoverValue(0)}
        >
          ⭐
        </span>
      ))}
    </div>
  );
};

export default StarsRating;
