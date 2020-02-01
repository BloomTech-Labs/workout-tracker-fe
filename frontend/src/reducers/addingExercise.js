import {
  ADDING_EXERCISE,
  ADDING_EXERCISE_SUCCESS,
  ADDING_EXERCISE_FAILED
} from "../actions/index";

const initialState = {
  status: [],
  member: [],
  addingExercise: false,
  error: null,
  message: ""
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDING_EXERCISE:
      return {
        ...state,
        addingExercise: true
      };
    case ADDING_EXERCISE_SUCCESS:
      return {
        ...state,
        addingExercise: false,
        error: null,
        status: action.payload
      };
    case ADDING_EXERCISE_FAILED:
      return {
        ...state,
        addingExercise: false,
        error: action.payload,
        message: "Unable to add exercise"
      };

    default:
      return state;
  }
}
