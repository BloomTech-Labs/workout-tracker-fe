import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILED, FETCHING_ROUTINES, FETCHING_ROUTINES_SUCCESS, FETCHING_ROUTINES_FAILED, FETCHING_EXERCISES,FETCHING_EXERCISES_SUCCESS, FETCHING_EXERCISES_FAILED } from '../Action/Action.js'

const initialState = {
    users: [],
    routines: [],
    routine_exercises: [],
    exercises: [],
    fetchingUser: false,
    fetchingRoutines: false,
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

        case FETCHING_ROUTINES:
            return {
                ...state,
                fetchingRoutines: true,
                error: null,
            }

        case FETCHING_ROUTINES_SUCCESS:
            return {
                ...state,
                fetchingRoutines: false,
                routines: action.payload,
                routine_exercises: action.payload,
                error: null,
            }

        case FETCHING_ROUTINES_FAILED:
            return {
                ...state,
                fetchingRoutines: false,
                error: null,
            }

        case FETCHING_EXERCISES:
            return {
                ...state,
                fetchingUsers: true,
                error: null,
            }

        case FETCHING_EXERCISES_SUCCESS:
            return {
                ...state,
                fetchingUsers: false,
                error: null,
                exercises: action.payload,

            }
        case FETCHING_EXERCISES_FAILED:
            return {
                ...state,
                fetchingUser: false,
                error: action.payload
            
            }

        default:
            return state
    }
}