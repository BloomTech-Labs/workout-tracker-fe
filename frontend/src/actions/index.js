import axios from "axios";

export const FETCHING = 'FETCHING'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILED = 'FETCHING_FAILED'

// export const GET_MEMBERS = 'GET_MEMBERS'

export const FETCHING_ROUTINES = 'FETCHING_ROUTINES'
export const FETCHING_ROUTINES_SUCCESS = 'FETCHING_ROUTINES_SUCCESS'
export const FETCHING_ROUTINES_FAILED = 'FETCHING_ROUTINES_FAILED'

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_START = "LOGIN_START";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const SIGNUP_START = "SIGNUP_START";

export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGNOUT_FAIL = "SIGNOUT_FAIL";
export const SIGNOUT_START = "SIGNOUT_START";

export const EXERCISE_RECORD = 'EXERCISE_RECORD'
export const EXERCISE_RECORD_SUCCESS = 'EXERCISE_RECORD_SUCCESS'
export const EXERCISE_RECORD_FAILED = 'EXERCISE_RECORD_FAILED'

export const FETCHING_STATUS = 'FETCHING_ROUTINES'
export const FETCHING_STATUS_SUCCESS = 'FETCHING_ROUTINES_SUCCESS'
export const FETCHING_STATUS_FAILED = 'FETCHING_ROUTINES_FAILED'

export const getStatuss = () => {
  const promise = axios.get("http://localhost:4000/api/memberstatus");
  console.log('this is the user', promise)
  return dispatch => {
    dispatch({ type: FETCHING_STATUS }); // first state of 'fetching' is dispatched
    promise
      .then(response => {
        dispatch({ type: FETCHING_STATUS_SUCCESS, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_STATUS_FAILED }); // our other 2nd state of 'rejected' will be difirst_namespatched here.
      });
  };
};

// export const getUser = () => dispatch => {
//     dispatch({ type: FETCHING })
//     axios
//       .get('https://firstrep.herokuapp.com/api/members/1')
//       .then(response => {
//         dispatch({ type: FETCHING_SUCCESS, payload: response.data})
//       })
//       .catch(err => {
//         dispatch({ type: FETCHING_FAILED, payload: err.response })
//       })
// }

export const getMembers = () => {
  const userId = localStorage.getItem("userId");
  const promise = axios.get(`http://firstrep.herokuapp.com/api/members/${userId}`);
  console.log('this is the member', promise)
  return dispatch => {
    dispatch({ type: FETCHING }); // first state of 'fetching' is dispatched
    promise
      .then(response => {
        dispatch({ type: FETCHING_SUCCESS, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_FAILED }); // our other 2nd state of 'rejected' will be dispatched here.
      });
  };
};

export const getRoutines = () => dispatch => {
  dispatch({ type: FETCHING_ROUTINES })
  axios
    .get('https://firstrep.herokuapp.com/api/routines')
    .then(response => {
      dispatch({ type: FETCHING_ROUTINES_SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: FETCHING_ROUTINES_FAILED, payload: err.response })
    })
}

export const getExerciseRecords = () => dispatch => {
  dispatch({ type: EXERCISE_RECORD })
  axios
    .get('https://firstrep.herokuapp.com/api/')
    .then(response => {
      dispatch({ type: EXERCISE_RECORD_SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: EXERCISE_RECORD_FAILED, payload: err.response })
    })
}

export const signUp = input => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post(`https://firstrep.herokuapp.com/api/members`, input)
    .then(res => {
      console.log("User successfully added to database");
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === "Error") {
        localStorage.removeItem("token");
      }
      dispatch({ type: SIGNUP_FAIL, payload: err.message });
    });
};

export const signOut = input => dispatch => {
  dispatch({ type: SIGNOUT_START });
  return axios
    .post(`http://localhost:4000/api/members/logout`, input)
    .then(res => {
      localStorage.removeItem("token");
      console.log("User successfully Logged Out");
      dispatch({ type: SIGNOUT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === "Error") {
        localStorage.removeItem("token");
      }
      dispatch({ type: SIGNUP_FAIL, payload: err.message });
    });
};

export const login = input => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`https://firstrep.herokuapp.com/api/members/login`, input)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === "Error") {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAIL, payload: err.message });
    });
};
