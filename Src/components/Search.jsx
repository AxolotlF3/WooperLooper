import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIngredient } from '../actions/actions';
import { updateRecipes } from '../actions/actions';

const mapStateToProps = state => ({
  // add pertinent state here
  ingredient: state.recipes.ingredient,
  recipes: state.recipes.recipes,
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
      <div>
        <input type="text" onChange={e => props.searchBarHandler(e.target.value)}/>
        <button type="button" onClick={() => fetchRecipes()}>Search Recipe!</button>
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);