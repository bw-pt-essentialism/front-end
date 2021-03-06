import {
  LOGIN_POST_START,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAILURE
} from "../actions/login.actions";

const initialState = {
  welcome: JSON.parse(localStorage.getItem("welcome")) || "",
  id: JSON.parse(localStorage.getItem("id")) || ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_POST_SUCCESS:
      return {
        welcome: action.payload.message,
        id: action.payload.id,
        isLoading: false
      };
    case LOGIN_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default loginReducer;
