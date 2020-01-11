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
  ADD_TO_TOP_TEMP_LIST,
  ADD_VALUE_DESCRIPTION
} from "../actions/values.actions";

const initialState = {
  values: JSON.parse(localStorage.getItem("values")) || [
    {
      id: "",
      name: "",
      description: ""
    }
  ],
  usersList: JSON.parse(localStorage.getItem("usersList")) || [],
  userValues: JSON.parse(localStorage.getItem("userValues")) || []
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
        values: [...state.values, action.payload.values]
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
        values: action.payload
      };
    case VALUES_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_TO_TOP_TEMP_LIST:
      const temp = [...state.usersList, action.payload];
      localStorage.setItem("usersList", JSON.stringify(temp));
      return {
        ...state,
        usersList: [...state.usersList, action.payload]
      };
    case ADD_TO_TOP_LIST:
      const values = action.payload;
      localStorage.setItem("userValues", JSON.stringify(values));
      return {
        ...state,
        userValues: [action.payload]
      };

    case ADD_VALUE_DESCRIPTION:
      // const values = action.payload;
      // localStorage.setItem("userValues", JSON.stringify(values));
      console.log(`ADD_VALUE_DESCRIPTION: action.payload: `, action.payload);
      return {
        ...state,
        userValues: state.userValues.map(val => {
          if (val.id === action.payload.id) {
            return { ...val, description: action.payload.description };
          } else {
            return val;
          }
        })
      };
    case REMOVE_VALUE:
      return {
        ...state,
        usersList:
          state.usersList.length > 0 &&
          state.usersList.filter(value => {
            // !value.remove &&
            //   localStorage.setItem(
            //     "usersList",
            //     JSON.stringify([...state.usersList, value])
            //   );
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
