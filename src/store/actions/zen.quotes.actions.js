import axios from "axios";

export const ZEN_LOAD_START = "ZEN_LOAD_START";
export const ZEN_LOAD_SUCCESS = "ZEN_LOAD_SUCCESS";
export const ZEN_LOAD_FAILURE = "ZEN_LOAD_FAILURE";

export const getZen = () => dispatch => {
  dispatch({ type: ZEN_LOAD_START });
  axios
    .get(`https://api.github.com/zen`)
    .then(res => {
      console.log(`zen.quotes.actions: .then: res.data: `, res.data);
      dispatch({ type: ZEN_LOAD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(`zen.quotes.actions: .catch: err: `, err);
      dispatch({ type: ZEN_LOAD_FAILURE, payload: err });
    });
};
// dispatch({ type: FRIENDS_LOAD_START });
// axiosWithAuth()
//   .get(`/friends`)
//   .then(res => {
//     dispatch({
//       type: FRIENDS_LOAD_SUCCESS,
//       payload: res.data
//     });
//   })
//   .catch(err => {
//     dispatch({
//       type: FRIENDS_LOAD_FAILURE,
//       payload: "error loading friends"
//     });
//   });
