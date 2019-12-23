import {
  // VALUES_LOAD_START,
  // VALUES_LOAD_SUCCESS,
  // VALUES_LOAD_FAILURE,
  // VALUES_POST_START,
  // VALUES_POST_SUCCESS,
  // VALUES_POST_FAILURE,
  // VALUES_PUT_START,
  // VALUES_PUT_SUCCESS,
  // VALUES_PUT_FAILURE,
  // VALUES_DELETE_START,
  // VALUES_DELETE_SUCCESS,
  // VALUES_DELETE_FAILURE,
  TOGGLE_HIDDEN
} from "../actions/values.actions";

import { values } from "../../dummy-data";

const initialState = {
  values: values,
  hide: true
};

const valuesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case VALUES_LOAD_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case VALUES_LOAD_SUCCESS:
    //   return {
    //     ...state,
    //     values: action.payload,
    //     isLoading: false
    //   };
    // case VALUES_LOAD_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };
    // case VALUES_POST_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case VALUES_POST_SUCCESS:
    //   return {
    //     ...state,
    //     values: [...state.values, action.payload],
    //     isLoading: false
    //   };
    // case VALUES_POST_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };
    // case VALUES_PUT_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case VALUES_PUT_SUCCESS:
    //   return {
    //     ...state,
    //     values: [...state.values, action.payload.values],
    //     notes: [action.payload.notes]
    //   };
    // case VALUES_PUT_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };

    // case VALUES_DELETE_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case VALUES_DELETE_SUCCESS:
    //   return {
    //     ...state,
    //     values: [action.payload]
    //   };
    // case VALUES_DELETE_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };

    case TOGGLE_HIDDEN:
      return {
        ...state,
        values: state.values.map(val => {
          if (val.id === action.payload)
            return {
              ...val,
              hidden: !val.hidden
            };
        })
      };
    default:
      return state;
  }
};

export default valuesReducer;
