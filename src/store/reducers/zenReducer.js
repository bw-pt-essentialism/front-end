import {
  ZEN_GET_START,
  ZEN_GET_SUCCESS,
  ZEN_GET_FAILURE
} from "../actions/zen.quotes.actions";

const initalState = {
  quote: "",
  isLoading: false
};

const zenReducer = (state = initalState, action) => {
  switch (action.type) {
    case ZEN_GET_START:
      return {
        ...state,
        isLoading: true
      };
    case ZEN_GET_SUCCESS:
      return {
        quote: action.payload,
        isLoading: false
      };
    case ZEN_GET_FAILURE:
      return {
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default zenReducer;
