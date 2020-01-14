import {
  FETCHING_STATUS,
  FETCHING_STATUS_SUCCESS,
  FETCHING_STATUS_FAILED
} from "../actions/index";

const initialState = {
  status: [],
  fetchingStatus: false,
  error: null,
  loading: false
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_STATUS:
      return {
        ...state,
        fetchingStatus: true,
        error: null,
        loading: true
      };
    case FETCHING_STATUS_SUCCESS:
      return {
        ...state,
        fetchingStatus: false,
        error: null,
        status: action.payload,
        loading: false
      };
    case FETCHING_STATUS_FAILED:
      return {
        ...state,
        fetchingStatus: false,
        error: action.payload
      };
    default:
      return state;
  }
}