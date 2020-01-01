import { axiosWithAuth } from "../../axiosWithAuth";

export const USER_LOAD_START = "USER_LOAD_START";
export const USER_LOAD_SUCCESS = "USER_LOAD_SUCCESS";
export const USER_LOAD_FAILURE = "USER_LOAD_FAILURE";

export const USER_POST_START = "USER_POST_START";
export const USER_POST_SUCCESS = "USER_POST_SUCCESS";
export const USER_POST_FAILURE = "USER_POST_FAILURE";

export const USER_PUT_START = "USER_PUT_START";
export const USER_PUT_SUCCESS = "USER_PUT_SUCCESS";
export const USER_PUT_FAILURE = "USER_PUT_FAILURE";

export const USER_DELETE_START = "USER_DELETE_START";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAILURE = "USER_DELETE_FAILURE";

export const getUser = () => dispatch => {
  dispatch({ type: USER_LOAD_START });
  axiosWithAuth()
    .get(`/user`)
    .then(res => {
      dispatch({
        type: USER_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: USER_LOAD_FAILURE,
        payload: "error loading projects"
      });
    });
};

export const postUser = value => dispatch => {
  // dispatch({ type: USER_POST_START, payload: value });
  // axiosWithAuth()
  // .post(`/projects`, value)
  // .then(res => {
  console.log(`user.actions: postUser: value: `, value);
  dispatch({
    type: USER_POST_SUCCESS,
    payload: value
  });

  localStorage.setItem("token", "temp_token");
  // window.location.href = "/values-selection";
  // })
  // .then(() => (window.location.href = "/values-selection"))
  // .catch(err => {
  //   dispatch({
  //     type: USER_POST_FAILURE,
  //     payload: "error posting data"
  //   });
  // });
};

export const putUser = (value, id) => dispatch => {
  dispatch({ type: USER_PUT_START, payload: value });
  axiosWithAuth()
    .put(`/user/${id}`, value)
    .then(res => {
      dispatch({
        type: USER_PUT_SUCCESS,
        payload: res.data
      });
    })
    .then(() => (window.location.href = "/home"))
    .catch(err => {
      dispatch({
        type: USER_PUT_FAILURE,
        payload: "error putting user data"
      });
    });
};

export const deleteUser = id => dispatch => {
  dispatch({ type: USER_DELETE_START });
  axiosWithAuth()
    .delete(`/user/${id}`)
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
        payload: "error deleting user data"
      });
    });
};
