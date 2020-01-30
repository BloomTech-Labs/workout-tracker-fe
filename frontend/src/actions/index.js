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

export const EXERCISE_RECORD = 'EXERCISE_RECORD'
export const EXERCISE_RECORD_SUCCESS = 'EXERCISE_RECORD_SUCCESS'
export const EXERCISE_RECORD_FAILED = 'EXERCISE_RECORD_FAILED'

export const FETCHING_STATUS = 'FETCHING_ROUTINES'
export const FETCHING_STATUS_SUCCESS = 'FETCHING_ROUTINES_SUCCESS'
export const FETCHING_STATUS_FAILED = 'FETCHING_ROUTINES_FAILED'

export const ADD_WEEK = "ADD_WEEK";

export const FIRST_WEEK = 'FIRST_WEEK';
export const SECOND_WEEK = 'SECOND_WEEK';
export const THIRD_WEEK = 'THIRD_WEEK';
export const FOURTH_WEEK = 'FOURTH_WEEK';

export const FIRST_WEEK_CALORIES = "FIRST_WEEK_CALORIES";
export const SECOND_WEEK_CALORIES = "SECOND_WEEK_CALORIES";
export const THIRD_WEEK_CALORIES = "THIRD_WEEK_CALORIES";
export const FOURTH_WEEK_CALORIES = "FOURTH_WEEK_CALORIES"

export const FIRST_WEEK_MUSCLE = "FIRST_WEEK_MUSCLE";
export const SECOND_WEEK_MUSCLE = "SECOND_WEEK_MUSCLE";
export const THIRD_WEEK_MUSCLE = "THIRD_WEEK_MUSCLE";
export const FOURTH_WEEK_MUSCLE = "FOURTH_WEEK_MUSCLE";
export const FIFTH_WEEK_MUSCLE = "FIFTH_WEEK_MUSCLE";
export const SIX_WEEK_MUSCLE = "SIX_WEEK_MUSCLE";

export const POST_STATUS_START = 'FETCHING_ROUTINES_START'
export const POST_STATUS_SUCCESS = 'FETCHING_ROUTINES_SUCCESS'
export const POST_STATUS_FAIL = 'FETCHING_ROUTINES_FAIL'

export const UPDATE_STATUS_START = 'UPDATE)STATUS_START'
export const UPDATE_STATUS_SUCCESS = 'UPDATE_STATUS_SUCCESS'
export const UPDATE_STATUS_FAILED = 'UPDATESTATUS_FAIL'

export const UPDATE_USER_START = 'UPDATE_USER_START'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED'

export const getStatuss = () => {
  const userId = localStorage.getItem("userId");
  const promise = axios.get(`https://firstrep.herokuapp.com/api/members/${userId}/status`);
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


export const getMembers = () => {
  const userId = localStorage.getItem("userId");
  const promise = axios.get(`https://firstrep.herokuapp.com/api/members/${userId}`);
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

export const postStatus = input =>  dispatch => {
  const userId = localStorage.getItem('userId')
  dispatch({ type: POST_STATUS_START });
  return axios
    .post(`https://firstrep.herokuapp.com/api/members/${userId}/status`, input)
    .then(res => {
      console.log("User stats have been set");
      dispatch({ type: POST_STATUS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_STATUS_FAIL, payload: err.message });
    });
}

export const updateStatus = input => dispatch => {
  const userId = localStorage.getItem("userId")
  dispatch({ type: UPDATE_STATUS_START})
  return axios
    .put(`https://firstrep.herokuapp.com/api/members/${userId}/status`, input)
    .then(res => {
      dispatch({ type: UPDATE_STATUS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: UPDATE_STATUS_FAILED, payload:err.message })
    })
}

export const updateUser = input => dispatch => {
  const userId = localStorage.getItem("userId")
  dispatch({ type: UPDATE_USER_START})
  return axios
    .put(`https://firstrep.herokuapp.com/api/members/${userId}`, input)
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAILED, payload:err.message })
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


export function addWeek( first_week, second_week, third_week, fourth_week){
  return {
    type: ADD_WEEK,
    payload: {
      first_week,
      second_week,
      third_week,
      fourth_week
    }
  }
}

export function firstWeek( first_week ){
  return {
    type: FIRST_WEEK,
    payload: {
      first_week,
    }
  }
}

export function secondWeek( second_week ){
  return {
    type: SECOND_WEEK,
    payload: {
      second_week
    }
  }
}

export function thirdWeek( third_week ){
  return {
    type: THIRD_WEEK,
    payload: {
      third_week
    }
  }
}

export function fourthWeek( fourth_week ){
  return {
    type: FOURTH_WEEK,
    payload: {
      fourth_week
    }
  } 
}

export function firstWeekCalories( first_week_calories ){
  return {
    type: FIRST_WEEK_CALORIES,
    payload: {
      first_week_calories
    }
  }
}

export function secondWeekCalories( second_week_calories ){
    return {
      type: SECOND_WEEK_CALORIES,
      payload: {
        second_week_calories
    }
  }
}

  export function thirdWeekCalories( third_week_calories ){
      return {
        type: THIRD_WEEK_CALORIES,
        payload: {
          third_week_calories
    }
  }
}

export function fourthWeekCalories( fourth_week_calories ){
  return {
    type: FOURTH_WEEK_CALORIES,
    payload: {
      fourth_week_calories
    }
  }
}

export function firstWeekMuscle( first_week_muscle ){
  return {
    type: FIRST_WEEK_MUSCLE,
    payload: {
      first_week_muscle
    }
  }
}

export function secondWeekMuscle( second_week_muscle ){
  return {
    type: SECOND_WEEK_MUSCLE,
    payload: {
      second_week_muscle
    }
  }
}

export function thirdWeekMuscle( third_week_muscle ){
  return {
    type: THIRD_WEEK_MUSCLE,
    payload: {
      third_week_muscle
    }
  }
}

export function fourthWeekMuscle( fourth_week_muscle ){
  return {
    type: FOURTH_WEEK_MUSCLE,
    payload: {
      fourth_week_muscle
    }
  }
}

export function fifthWeekMuscle( fifth_week_muscle ){
  return {
    type: FIFTH_WEEK_MUSCLE,
    payload: {
      fifth_week_muscle
    }
  }
}

export function sixWeekMuscle( six_week_muscle ){
  return {
    type: SIX_WEEK_MUSCLE,
    payload: {
      six_week_muscle
    }
  }
}