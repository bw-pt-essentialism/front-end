import { axiosWithAuth } from "../../axiosWithAuth";

export const LOGIN_POST_START = "LOGIN_POST_START";
export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
export const LOGIN_POST_FAILURE = "LOGIN_POST_FAILURE";

export const postLogin = value => dispatch => {
  dispatch({ type: LOGIN_POST_START, payload: value });
  return axiosWithAuth()
    .post(`/auth/login`, value)
    .then(res => {
      dispatch({
        type: LOGIN_POST_SUCCESS,
        payload: res.data
      });
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("id", JSON.stringify(res.data.id));
      localStorage.setItem("username", JSON.stringify(value.username));
      localStorage.setItem("welcome", JSON.stringify(res.data.message));
    })
    .catch(err => {
      dispatch({
        type: LOGIN_POST_FAILURE,
        payload: err
      });
    });
};
