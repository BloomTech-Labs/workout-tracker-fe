import axios from 'axios'

export const FETCHING = 'FETCHING'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILED = 'FETCHING_FAILED'

export const FETCHING_ROUTINES = 'FETCHING_ROUTINES'
export const FETCHING_ROUTINES_SUCCESS = 'FETCHING_ROUTINES_SUCCESS'
export const FETCHING_ROUTINES_FAILED = 'FETCHING_ROUTINES_FAILED'

export const FETCHING_EXERCISES = 'FETCHING_EXERCISES'
export const FETCHING_EXERCISES_SUCCESS = 'FETCHING_EXERCISES_SUCCESS'
export const FETCHING_EXERCISES_FAILED = 'FETCHING_EXERCISES_FAILED'

export const getUser = () => dispatch => {
    dispatch({ type: FETCHING })
    axios
      .get('https://firstrep.herokuapp.com/api/members/:id')
      .then(response => {
        dispatch({ type: FETCHING_SUCCESS, payload: response.data})
      })
      .catch(err => {
        dispatch({ type: FETCHING_FAILED, payload: err.response })
      })
}

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

export const getExercises = () => dispatch => {
  dispatch({ type: FETCHING_EXERCISES })
  axios
    .get('https://firstrep.herokuapp.com/api/routinesexercises')
    .then(response => {
      dispatch({ type: FETCHING_EXERCISES_SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: FETCHING_EXERCISES_FAILED, payload: err.response })
    })
}



