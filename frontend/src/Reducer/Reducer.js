import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILED } from '../Action/Action.js'

const initialState = {
    users: [],
    fetchingUser: false,
    error: null,
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING:
            return {
                ...state,
                fetchingUsers: true,
                error: null,
            }
        case FETCHING_SUCCESS:
            
            return {
                ...state,
                fetchingUsers: false,
                error: null,
                users: action.payload,

            }
        case FETCHING_FAILED:
            return {
                ...state,
                fetchingUser: false,
                error: action.payload
            
            }

        default:
            return state
    }
}