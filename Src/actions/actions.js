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
export const updateAccountStatus = (accountStatus) => ({
  type: types.UPDATE_ACCOUNT_STATUS,
  payload: accountStatus,
})

export const updateLoginStatus = (value) => ({
  type: types.UPDATE_LOGIN_STATUS,
<<<<<<< HEAD
  payload: value,
})
=======
  payload:value,
})
>>>>>>> 9c84c48316c1310092b36e53dfa514cabe8caab0
