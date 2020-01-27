import {
  ADDING_ROUTINE,
  ADDING_ROUTINE_SUCCESS,
  ADDING_ROUTINE_FAILED
} from "../actions/index";

const initialState = {
  status: {},
  member: [],
  addingExercise: false,
  error: null,
  message: ""
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDING_ROUTINE:
      return {
        ...state,
        addingExercise: true
      };
    case ADDING_ROUTINE_SUCCESS:
      return {
        ...state,
        addingExercise: false,
        error: null,
        status: action.payload
      };
    case ADDING_ROUTINE_FAILED:
      return {
        ...state,
        addingExercise: false,
        error: action.payload,
        message: "Unable to add routine"
      };

    default:
      return state;
  }
}
