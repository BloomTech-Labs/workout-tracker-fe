import { SIGNUP_START, SIGNUP_SUCCESS } from "../actions";

const initialState = {
  signingUp: false,
  loggingIn: false,
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        signinUp: true
      };
    case SIGNUP_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        message: "Successfully signed up a user"
      };
    default:
      return state;
  }
}
