import React from "react";
import PreviousSearches from "../Components/PreviousSearches";
import { useState } from "react";

import "../PagesCss/Recipes.css";
import ReciepeCard from "../Components/ReciepeCard";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.meals || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  console.log(data);

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
    fetchMeals(searchQuery);
  };

  return (
    <>
      {" "}
      <div className="recipe-page">
        <PreviousSearches onSearch={handleSearch} />
        <div className="recipe-container">
          {data.map((meal, index) => (
            <ReciepeCard key={index} meal={meal} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
