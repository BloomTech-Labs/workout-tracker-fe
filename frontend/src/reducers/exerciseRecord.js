import { EXERCISE_RECORD, EXERCISE_RECORD_SUCCESS, EXERCISE_RECORD_FAILED } from '../actions/index'

const initialState = {
    exercises: [],
    fetchingExercises: false,
    error: null,
}

export default function reducer(state = initialState, action) {
    switch(action.type) {

        case FETCHING:
            return {
                ...state,
                fetchingExercises: true,
                error: null,
            }

        case FETCHING_SUCCESS:
            return {
                ...state,
                fetchingExercises: false,
                error: null,
                exercises: action.payload,

            }
        case FETCHING_FAILED:
            return {
                ...state,
                fetchingExercises: false,
                error: action.payload
            
            }
        default:
            return state
    }
}