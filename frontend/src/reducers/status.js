import { POST_STATUS_START, POST_STATUS_SUCCESS, POST_STATUS_FAIL } from "../actions";

const initialState = {
  postingStatus: false,
  statusPosted: false,
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_STATUS_START:
      return {
        ...state,
        postingStatus: true
      };
    case POST_STATUS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        statusPosted: true,
        message: "Successfully signed up a user"
      };

    case POST_STATUS_FAIL:
        return {
            ...state,
            ...action.payload,
            message: "Status could not be posted"
        }
    default:
      return state;
  }
}