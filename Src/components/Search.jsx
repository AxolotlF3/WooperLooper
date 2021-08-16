import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIngredient } from '../actions/actions';
import { updateRecipes } from '../actions/actions';
import Recipes from './Recipes.jsx';
import RecipeDetails from './RecipeDetails.jsx';

const mapStateToProps = state => ({
  // add pertinent state here
  ingredient: state.recipes.ingredient,
  recipes: state.recipes.recipes,
  selectedRecipe: state.recipes.selectedRecipe,
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  searchBarHandler: input => dispatch(updateIngredient(input)),
  clickHandler: data => dispatch(updateRecipes(data)),
});

const Search = props => {
  const fetchRecipes = () => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${props.ingredient}`)
      .then(res => res.json())
      .then(data => {
        return props.clickHandler(data.meals)
      })
    };

    return(
      <div className="search-wrapper">
        <input type="text" onChange={e => props.searchBarHandler(e.target.value)}/>
        <button type="button" onClick={() => fetchRecipes()}>Search Recipe!</button>
        {
          props.selectedRecipe.idMeal ? 
          <RecipeDetails/> :
          <Recipes />
        }
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);