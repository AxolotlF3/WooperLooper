import * as types from '../constants/actionTypes';

const initialState = {
  ingredient: '',
  recipes: [],
  selectedRecipe: '',
  userSignedIn: false,
  userHasAccount: true,
};

const recipesReducer = (state = initialState, action) => {
  // console.log(state, 'state')

  switch (action.type) {
    case types.ADD_INGREDIENT: {
      return {
        ...state,
        ingredient: action.payload
      }
    }
    case types.ADD_RECIPES: {
      return {
        ...state,
        recipes: action.payload
      }
    }
    case types.UPDATE_ACCOUNT_STATUS: {
      return {
        ...state,
        userHasAccount: action.payload,
      }
    }
    case types.UPDATE_ACCOUNT_STATUS: {
      return {
        ...state,
        userSignedIn: action.payload,
      }
    }
    case types.ADD_SELECTED_RECIPE: {
      return {
        ...state,
        selectedRecipe: action.payload
      }

    }
    default: {
      return state;
    }
  }
};

export default recipesReducer;
