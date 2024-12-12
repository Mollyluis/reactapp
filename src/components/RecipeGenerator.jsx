import React, { useState } from "react";

function RecipeGenerator() {
  const [meal, setMeal] = useState(null);

  const fetchMeal = async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await response.json();
      setMeal(data.meals[0]); 
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
      } else {
        break;
      }
    }
    return ingredients;
  };

  return (
    <div>
    <h4 className="text-center mb-3">Recipe Generator</h4>
    <button className="custom-btn w-100 mb-3" onClick={fetchMeal}>
        Get Random Meal
    </button>
    {meal && (
        <div>
        <h5 className="text-center">{meal.strMeal}</h5>
        <img
            className="img-fluid d-block mx-auto rounded mb-3"
            src={meal.strMealThumb}
            alt={meal.strMeal}
        />
        <div>
            <div className="mb-3">
              <h6>Ingredients:</h6>
              <ul>
                  {getIngredients(meal).map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                  ))}
              </ul>
            </div>
            <div>
              <h6>Preparation:</h6>
              <p>{meal.strInstructions}</p>
            </div>
        </div>
        </div>
    )}
    </div>


  );
}

export default RecipeGenerator;
