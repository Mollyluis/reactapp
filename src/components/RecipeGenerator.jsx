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
    <h3 className="text-center mb-4">Recipe Generator</h3>
    <button className="custom-btn w-100 mb-5" onClick={fetchMeal}>
        Get Random Meal
    </button>
    {meal && (
        <div className="recipe-container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="text-center mb-3">{meal.strMeal}</h4>
              <img
              className="img-fluid d-block mx-auto rounded mb-3"
              src={meal.strMealThumb}
              alt={meal.strMeal}
              />
            </div>
            <div className="col-md-6 mt-5">
              <h6>Ingredients:</h6>
              <ul>
                  {getIngredients(meal).map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                  ))}
              </ul>
            </div>
            <div className="col-md-12 d-flex justify-content-center mt-4">
              <div className="text-center">
                <h6>Preparation:</h6>
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          </div>
        <div>
      </div>
      </div>
    )}
    </div>
  );
}

export default RecipeGenerator;
