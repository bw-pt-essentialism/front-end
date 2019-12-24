import { axiosWithAuth } from "../../axiosWithAuth";

export const VALUES_LOAD_START = "VALUES_LOAD_START";
export const VALUES_LOAD_SUCCESS = "VALUES_LOAD_SUCCESS";
export const VALUES_LOAD_FAILURE = "VALUES_LOAD_FAILURE";

export const VALUES_POST_START = "VALUES_POST_START";
export const VALUES_POST_SUCCESS = "VALUES_POST_SUCCESS";
export const VALUES_POST_FAILURE = "VALUES_POST_FAILURE";

export const VALUES_PUT_START = "VALUES_PUT_START";
export const VALUES_PUT_SUCCESS = "VALUES_PUT_SUCCESS";
export const VALUES_PUT_FAILURE = "VALUES_PUT_FAILURE";

export const VALUES_DELETE_START = "VALUES_DELETE_START";
export const VALUES_DELETE_SUCCESS = "VALUES_DELETE_SUCCESS";
export const VALUES_DELETE_FAILURE = "VALUES_DELETE_FAILURE";

export const ADD_TO_TOP_LIST = "ADD_TO_TOP_LIST";
export const REMOVE_VALUE = "REMOVE_VALUE";
export const TOGGLE_VALUE = "TOGGLE_VALUE";

export const getValues = () => dispatch => {
  dispatch({ type: VALUES_LOAD_START });
  axiosWithAuth()
    .get(`/values`)
    .then(res => {
      dispatch({
        type: VALUES_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: VALUES_LOAD_FAILURE,
        payload: "error loading values"
      });
    });
};

export const postValues = value => dispatch => {
  dispatch({ type: VALUES_POST_START, payload: value });
  axiosWithAuth()
    .post(`/values`, value)
    .then(res => {
      dispatch({
        type: VALUES_POST_SUCCESS,
        payload: res.data
      });
    })
    .then(() => (window.location.href = "/home"))
    .catch(err => {
      dispatch({
        type: VALUES_POST_FAILURE,
        payload: "error posting data"
      });
    });
};

export const putValues = (value, id) => dispatch => {
  dispatch({ type: VALUES_PUT_START, payload: value });
  axiosWithAuth()
    .put(`/values/${id}`, value)
    .then(res => {
      dispatch({
        type: VALUES_PUT_SUCCESS,
        payload: res.data
      });
    })
    .then(() => (window.location.href = "/home"))
    .catch(err => {
      dispatch({
        type: VALUES_PUT_FAILURE,
        payload: "error putting values data"
      });
    });
};

export const deleteValues = id => dispatch => {
  dispatch({ type: VALUES_DELETE_START });
  axiosWithAuth()
    .delete(`/values/${id}`)
    .then(res => {
      dispatch({
        type: VALUES_DELETE_SUCCESS,
        payload: res.data
      });
    })
    .then(() => (window.location.href = "/home"))
    .catch(err => {
      dispatch({
        type: VALUES_DELETE_FAILURE,
        payload: "error deleting values data"
      });
    });
};

export const confirmTopList = value => dispatch => {
  console.log(`values.actions: topLst: value: `, value);
  dispatch({
    type: ADD_TO_TOP_LIST,
    payload: value
  });
};

export const toggleValue = value => dispatch => {
  console.log(`values.actions: toggleValue: value: `, value);
  dispatch({
    type: TOGGLE_VALUE,
    payload: value
  });
};

export const removeToggledValue = value => dispatch => {
  console.log(`values.actions: removeToggledValue: value: `, value);
  dispatch({
    type: REMOVE_VALUE,
    payload: value
  });
};
