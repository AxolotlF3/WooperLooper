import * as types from '../constants/actionTypes';

// add more action creators
export const updateIngredient = input => ({
  type: types.ADD_INGREDIENT,
  payload: input,
})

export const updateRecipes = data => ({
  type: types.ADD_RECIPES,
  payload: data,
});

export const updateSelectedRecipe = data => ({
  type: types.ADD_SELECTED_RECIPE,
  payload: data,
});