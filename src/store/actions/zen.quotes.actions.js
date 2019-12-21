import axios from "axios";

export const ZEN_GET_START = "ZEN_GET_START";
export const ZEN_GET_SUCCESS = "ZEN_GET_SUCCESS";
export const ZEN_GET_FAILURE = "ZEN_GET_FAILURE";

export const getZen = value => dispatch => {
  console.log(`zen.qoutes.actions: getZen: value: `, value);
  dispatch({ type: ZEN_GET_START, payload: value });
  axios
    .get(`https://api.github.com/zen`, value)
    .then(res => {
      console.log(`zen.quotes.actions: .then: res: `, res);
      //   dispatchEvent({ type: ZEN_GET_SUCCESS, payload: "res" });
    })
    .catch(err => {
      console.log(`zen.quotes.actions: .catch: err: `, err);
      //   dispatchEvent({ type: ZEN_GET_FAILURE, payload: err });
    });
};
