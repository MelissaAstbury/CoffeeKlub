import * as actionTypes from "../actions/actionTypes";

const initialState = {
  coffee: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COFFEE_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_COFFEE_SUCCESS:
      return {
        ...state,
        coffee: state.coffee.concat(action.payload),
        loading: false,
      };
    case actionTypes.FETCH_COFFEE_FAIL:
      return { ...state, loading: true, error: action.error };
    default:
      return state;
  }
};

export default reducer;
