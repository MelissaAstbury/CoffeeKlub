import * as actionTypes from "./actionTypes";
// import { coffeeData } from "../../CoffeeData";

export const addToBasketStart = () => {
  return {
    type: actionTypes.ADD_TO_BASKET_START,
  };
};

export const addToBasketSuccess = (coffeeItem) => {
  return {
    type: actionTypes.ADD_TO_BASKET_SUCCESS,
    payload: coffeeItem,
  };
};

export const addToBasketFail = (error) => {
  return {
    type: actionTypes.ADD_TO_BASKET_FAIL,
    error: error,
  };
};

export const addToBasket = (coffeeItem) => {
  return (dispatch) => {
    dispatch(addToBasketStart());
    setTimeout(() => {
      dispatch(addToBasketSuccess(coffeeItem));
    }, 1000);
    // dispatch(fetchCoffeeFail(error));
  };
};
