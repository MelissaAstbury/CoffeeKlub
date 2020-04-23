import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basket: [],
  basketTotal: 0,
  error: null,
  loading: false,
};

const fixingDecimals = (currTotal, actionPrice) => {
  let finishedPrice = currTotal + actionPrice;
  return parseFloat(finishedPrice.toFixed(2));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_TO_BASKET_SUCCESS:
      return {
        ...state,
        basketTotal: fixingDecimals(state.basketTotal, action.coffeeItem.price),
        basket: state.basket.concat(action.coffeeItem),
        loading: false,
      };
    case actionTypes.ADD_TO_BASKET_FAIL:
      return {
        ...state,
        loading: true,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
