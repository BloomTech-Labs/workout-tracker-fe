import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILED = "FETCHING_FAILED";

export const getUser = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://firstrep.herokuapp.com/api/members")
    .then(response => {
      dispatch({ type: FETCHING_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAILED, payload: err.response });
    });
};
