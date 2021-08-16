import React from 'react';
import RecipeCard from './RecipeCard.jsx';

const Recipes = props => {
  const renderRecipes = () => {
    return props.recipes.map((recipe, i) => {
      return (
        <RecipeCard 
          key={`R${i}`}
          recipe={recipe}
        />
      )
     })
  }

  return(
    <div className="recipes-wrapper">{renderRecipes()}</div>  
  );
};

export default Recipes;