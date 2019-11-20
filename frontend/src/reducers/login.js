import { LOGIN_SUCCESS, LOGIN_START } from "../actions";

const initialState = {
  loggingIn: false,
  loggedIn: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      };
    default:
      return state;
  }
}
