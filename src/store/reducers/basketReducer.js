import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basket: [],
  basketTotal: 0,
  error: null,
  loading: false,
};

const fixingDecimals = (currTotal, actionPrice, operator) => {
  let finishedPrice = 0;
  if (operator === "+") {
    finishedPrice = currTotal + actionPrice;
  } else {
    finishedPrice = currTotal - actionPrice;
  }
  return parseFloat(finishedPrice.toFixed(2));
};

const checkItemForDuplicateOnAdd = (basket, coffeeItem) => {
  // const count = basket.filter((basketItem) => {
  //   return basketItem.id === coffeeItem.id;
  // }).length;
  const objIndex = basket.findIndex((obj) => obj.id === coffeeItem.id);
  if (basket[objIndex] === undefined) {
    return basket.concat(coffeeItem);
  } else {
    basket[objIndex].quantity++;
    return basket;
  }
};

const checkItemForDuplicateOnRemove = (basket, coffeeItem) => {
  const objIndex = basket.findIndex((obj) => obj.id === coffeeItem.id);
  const minQuantity = 1;
  if (basket[objIndex].quantity === minQuantity) {
    return basket.filter((basketItem) => {
      return basketItem.id !== coffeeItem.id;
    });
  } else {
    basket[objIndex].quantity--;
    return basket;
  }
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
        basketTotal: fixingDecimals(
          state.basketTotal,
          action.coffeeItem.price,
          "+"
        ),
        basket: checkItemForDuplicateOnAdd(state.basket, action.coffeeItem),
        loading: false,
      };
    case actionTypes.ADD_TO_BASKET_FAIL:
      return {
        ...state,
        loading: true,
        error: action.error,
      };
    case actionTypes.REMOVE_FROM_BASKET_SUCCESS:
      return {
        ...state,
        basketTotal: fixingDecimals(
          state.basketTotal,
          action.coffeeItem.price,
          "-"
        ),
        basket: checkItemForDuplicateOnRemove(state.basket, action.coffeeItem),
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
