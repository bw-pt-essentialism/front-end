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
  TOGGLE_VALUE,
  REMOVE_VALUE,
  ADD_TO_TOP_LIST
} from "../actions/values.actions";

import { values } from "../../dummy-data";

const initialState = {
  values: values,
  usersList: []
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
    case ADD_TO_TOP_LIST:
      console.log(
        `valuesReducer: ADD_TO_TOP_LIST: action.payload: `,
        action.payload
      );
      return {
        ...state,
        usersList: [...state.usersList, action.payload]
      };
    case REMOVE_VALUE:
      return {
        ...state,
        usersList: state.usersList.filter(value => {
          return !value.remove;
        })
      };
    case TOGGLE_VALUE:
      //   console.log(`valueReducer.js: switch: case: 'TOGGLE_VALUE`, state);
      //   console.log(
      //     `valueReducer: switch: case "TOGGLE_COMPETED": action.payload:  `,
      //     action.payload
      //   );
      return {
        ...state,

        usersList: state.usersList.map(value => {
          //   console.log(
          //     `valueReducer: switch: case "TOGGLE_COMPETED": state.valueReducer:  `,
          //     value
          //   );

          if (value.id === action.payload)
            // console.log(
            //   `valueReducer: TOGGLE_VALUE: value.complete`,
            //   value.VALUE
            // );
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
