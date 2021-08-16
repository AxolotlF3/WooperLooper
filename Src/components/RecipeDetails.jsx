import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  selectedRecipe: state.recipes.selectedRecipe,
});

const RecipeDetails = props => {
  const { strMeal, strInstructions, strMealThumb, strYoutube, strSource } = props.selectedRecipe;
  return(
    <div>
      <img src={strMealThumb} alt={`${strMeal} image`}/>
      <h1>{strMeal}</h1>
      <p>{strInstructions}</p>
      <p><a href={strSource} target="_blank" rel="noopener noreferrer">More Details</a></p>
    </div>  
  );
};

// export default RecipeDetails;
export default connect(mapStateToProps, null)(RecipeDetails);