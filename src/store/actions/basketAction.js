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

// export const addToBasketFail = (error) => {
//   return {
//     type: actionTypes.ADD_TO_BASKET_FAIL,
//     error: error,
//   };
// };

export const addToBasket = (coffeeItem) => {
  return (dispatch) => {
    dispatch(addToBasketStart());

    setTimeout(() => {
      // const coffeeItem = coffeeData.filter((item) => {
      //   return item.id === coffeeId;
      // });

      dispatch(addToBasketSuccess(coffeeItem));
    }, 100);

    // dispatch(fetchCoffeeFail(error));
  };
};
