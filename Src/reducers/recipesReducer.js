import * as types from '../constants/actionTypes';

const initialState = {
  ingredient: '',
  recipes: [],
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
    default: {
      return state;
    }
  }
};

export default recipesReducer;
