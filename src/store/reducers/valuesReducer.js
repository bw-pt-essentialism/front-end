import {
  VALUES_LOAD_START,
  VALUES_LOAD_SUCCESS,
  VALUES_LOAD_FAILURE,
  VALUES_POST_START,
  VALUES_POST_SUCCESS,
  VALUES_POST_FAILURE,
  VALUES_PUT_START,
  VALUES_PUT_SUCCESS,
  VALUES_PUT_FAILURE,
  VALUES_DELETE_START,
  VALUES_DELETE_SUCCESS,
  VALUES_DELETE_FAILURE,
  TOGGLE_VALUE,
  REMOVE_VALUE,
  ADD_TO_TOP_LIST,
  ADD_TO_TOP_TEMP_LIST
} from "../actions/values.actions";

const initialState = {
  values: [],
  usersList: [],
  userValues: []
};

const valuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALUES_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case VALUES_LOAD_SUCCESS:
      return {
        ...state,
        values: action.payload,
        isLoading: false
      };
    case VALUES_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case VALUES_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case VALUES_POST_SUCCESS:
      return {
        ...state,
        values: [...state.values, action.payload],
        isLoading: false
      };
    case VALUES_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case VALUES_PUT_START:
      return {
        ...state,
        isLoading: true
      };
    case VALUES_PUT_SUCCESS:
      return {
        ...state,
        values: [...state.values, action.payload.values],
        notes: [action.payload.notes]
      };
    case VALUES_PUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case VALUES_DELETE_START:
      return {
        ...state,
        isLoading: true
      };
    case VALUES_DELETE_SUCCESS:
      return {
        ...state,
        values: [action.payload]
      };
    case VALUES_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_TO_TOP_TEMP_LIST:
      return {
        ...state,
        usersList: [...state.usersList, action.payload]
      };
    case ADD_TO_TOP_LIST:
      localStorage.setItem("userValues", JSON.stringify(action.payload));
      return {
        ...state,
        userValues: [action.payload]
      };
    case REMOVE_VALUE:
      return {
        ...state,
        usersList: state.usersList.filter(value => {
          return !value.remove;
        })
      };
    case TOGGLE_VALUE:
      return {
        ...state,

        usersList: state.usersList.map(value => {
          if (value.id === action.payload)
            return {
              ...value,
              remove: !value.remove
            };
          return value;
        })
      };
    default:
      return state;
  }
};

export default valuesReducer;
