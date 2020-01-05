import { axiosWithAuth } from "../../axiosWithAuth";

export const LOGIN_POST_START = "LOGIN_POST_START";
export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
export const LOGIN_POST_FAILURE = "LOGIN_POST_FAILURE";

export const postLogin = value => dispatch => {
  console.log(`login.actions: postLogin: value: `, value);
  // dispatch({ type: LOGIN_POST_START, payload: value });
  // axiosWithAuth()
  //   .post(`/login`, value)
  //   .then(res => {
  dispatch({ type: LOGIN_POST_SUCCESS, payload: value });
  localStorage.setItem("token", "temp_token");
  // window.location.href = "/home";
  //   })
  //   .catch(err => {
  //     dispatch({ type: LOGIN_POST_FAILURE, payload: err });
  //   });
};
