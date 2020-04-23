import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basket: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET_START:
      return { ...state, loading: true };
    case actionTypes.ADD_TO_BASKET_SUCCESS:
      return {
        ...state,
        basket: state.basket.concat(action.payload),
        loading: false,
      };
    case actionTypes.ADD_TO_BASKET_FAIL:
      return { ...state, loading: true, error: action.error };
    default:
      return state;
  }
};

export default reducer;
