import * as actionTypes from "./actionTypes";

export const addToBasket = (coffeeItem) => {
  return (dispatch) => {
    dispatch(addToBasketSuccess(coffeeItem));
  };
};

export const addToBasketSuccess = (coffeeItem) => {
  return {
    type: actionTypes.ADD_TO_BASKET_SUCCESS,
    coffeeItem: coffeeItem,
  };
};
// dispatch(addToBasketStart());
// dispatch(fetchCoffeeFail(error));

// export const addToBasketStart = () => {
//   return {
//     type: actionTypes.ADD_TO_BASKET_START,
//   };
// };

// export const addToBasketFail = (error) => {
//   return {
//     type: actionTypes.ADD_TO_BASKET_FAIL,
//     error: error,
//   };
// };
