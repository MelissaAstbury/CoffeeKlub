import * as actionTypes from "./actionTypes";

const coffee = ["vanilla", "choco", "bannana"];

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_COFFEE_START,
  };
};

export const fetchCoffeeSuccess = (coffee) => {
  return {
    type: actionTypes.FETCH_COFFEE_SUCCESS,
    payload: coffee,
  };
};

export const fetchCoffeeFail = (error) => {
  return {
    type: actionTypes.FETCH_COFFEE_FAIL,
    error: error,
  };
};

export const fetchCoffee = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    setTimeout(() => {
      dispatch(fetchCoffeeSuccess(coffee));
    }, 1000);
    // dispatch(fetchCoffeeFail(error));
  };
};
