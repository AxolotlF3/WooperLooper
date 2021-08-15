import * as types from '../constants/actionTypes';

// add more action creators
export const updateIngredient = input => ({
  type: types.ADD_INGREDIENT,
  payload: input,
})

export const updateRecipes = () => ({
  type: types.ADD_RECIPES,
});

// export const addCardActionCreator = marketId => ({
//   type: types.ADD_CARD,
//   payload: marketId,
// });
// export const addMarketActionCreator = () => ({
//   type: types.ADD_MARKET,
// });

// export const setNewLocationActionCreator = userInput => ({
//   type: types.SET_NEW_LOCATION,
//   payload: userInput,
// });
// export const deleteCardActionCreator = marketId => ({
//   type: types.DELETE_CARD,
//   payload: marketId,
// });