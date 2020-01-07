import { axiosWithAuth } from "../../axiosWithAuth";

export const USER_GET_START = "USER_GET_START";
export const USER_GET_SUCCESS = "USER_GET_SUCCESS";
export const USER_GET_FAILURE = "USER_GET_FAILURE";

export const USER_POST_START = "USER_POST_START";
export const USER_POST_SUCCESS = "USER_POST_SUCCESS";
export const USER_POST_FAILURE = "USER_POST_FAILURE";

export const USER_PUT_START = "USER_PUT_START";
export const USER_PUT_SUCCESS = "USER_PUT_SUCCESS";
export const USER_PUT_FAILURE = "USER_PUT_FAILURE";

export const USER_DELETE_START = "USER_DELETE_START";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAILURE = "USER_DELETE_FAILURE";

export const getUser = id => dispatch => {
  dispatch({ type: USER_GET_START });
  axiosWithAuth()
    .get(`/users/${id}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: USER_GET_SUCCESS,
        payload: res.data
      });
      localStorage.setItem("user", JSON.stringify(res.data));
    })
    .catch(err => {
      dispatch({
        type: USER_GET_FAILURE,
        payload: "error getting user" + err
      });
    });
};
export const postUser = value => dispatch => {
  dispatch({ type: USER_POST_START, payload: value });
  console.log(`user.actions: postUser: value: `, value);
  return axiosWithAuth()
    .post(`/users`, value)
    .then(res => {
      // console.log(`user.actions: postUser: .then: res: `, res.data);
      dispatch({
        type: USER_POST_SUCCESS,
        payload: res.data
      });
      localStorage.setItem("token", "TEMP_TOKEN");
      // localStorage.setItem("user", JSON.stringify(res.data));
    })
    .catch(err => {
      dispatch({
        type: USER_POST_FAILURE,
        payload: "error posting data" + err
      });
    });
};

export const putUser = (value, id) => dispatch => {
  dispatch({ type: USER_PUT_START, payload: value });
  axiosWithAuth()
    .put(`/users/${id}`, value)
    .then(res => {
      dispatch({
        type: USER_PUT_SUCCESS,
        payload: res.data
      });
    })
    // .then(() => (window.location.href = "/home"))
    .catch(err => {
      dispatch({
        type: USER_PUT_FAILURE,
        payload: "error putting user data" + err
      });
    });
};

export const deleteUser = id => dispatch => {
  dispatch({ type: USER_DELETE_START });
  axiosWithAuth()
    .delete(`/users/${id}`)
    .then(res => {
      dispatch({
        type: USER_DELETE_SUCCESS,
        payload: res.data
      });
    })
    .then(() => (window.location.href = "/home"))
    .catch(err => {
      dispatch({
        type: USER_DELETE_FAILURE,
        payload: "error deleting user data" + err
      });
    });
};
