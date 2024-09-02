import React from "react";
import "../Styles/RecipeCard.css";

const ReciepeCard = ({ meal }) => {
  console.log({ meal });

  return (
    <div className="recipe-card">
      {meal ? (
        <div className="card-details">
          <img
            className="card-img"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <p className="dish-name">{meal.strMeal}</p>
          <button className="btn">Details</button>
        </div>
      ) : (
        <p>No meal data</p>
      )}
    </div>
  );
};

export default ReciepeCard;
