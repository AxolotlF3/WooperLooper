import React from 'react';
import { connect } from 'react-redux';
import { updateSelectedRecipe } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  recipeDetailsHandler: data => dispatch(updateSelectedRecipe(data)),
});

const RecipeCard = props => {
  const { strMeal, strMealThumb, idMeal } = props.recipe

  const fetchRecipeDetails = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(res => res.json())
    .then(data => {
      return props.recipeDetailsHandler(data.meals[0]);
    })
  };

  return(
    <div className="recipecard-wrapper" onClick={() => fetchRecipeDetails()}>
      <img src={strMealThumb} alt={`${strMeal} image`}/>
      <h3>{strMeal}</h3>
    </div>  
  );
};

export default connect(null, mapDispatchToProps)(RecipeCard);