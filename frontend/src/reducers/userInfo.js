import { GET_MEMBERS } from '../actions/index'

export default function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
        loading: false
      };

        default:
            return state
    }
}