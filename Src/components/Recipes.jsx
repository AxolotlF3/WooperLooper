import React from 'react';
import RecipeCard from './RecipeCard.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  // add pertinent state here
  ingredient: state.recipes.ingredient,
  recipes: state.recipes.recipes,
  selectedRecipe: state.recipes.selectedRecipe,
});

const Recipes = props => {
  const renderRecipes = () => {
    if (props.recipes) {
      return props.recipes.map((recipe, i) => {
        return (
          <RecipeCard 
            key={`R${i}`}
            recipe={recipe}
          />
        )
       })
    }
  }

  return(
    <div className="recipes-wrapper">{renderRecipes()}</div>  
  );
};

export default connect(mapStateToProps, null)(Recipes);