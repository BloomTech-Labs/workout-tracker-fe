import {
  FETCHING_STATUS,
  FETCHING_STATUS_SUCCESS,
  FETCHING_STATUS_FAILED,
  GET_MEMBERS
} from "../actions/index";

import { FETCHING, FETCHING_FAILED, FETCHING_SUCCESS } from '../actions/index';

const initialState = {
  status: [],
  member: [],
  fetchingStatus: false,
  fetchingMember: false,
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

      case FETCHING:
        return {
          ...state,
          fetchingMember: true,
          error: null,
          loading: true
        }
      case FETCHING_SUCCESS:
        return {
          ...state,
          fetchingMember: false,
          member: action.payload,
          error: null,
          loading: false
        }
      case FETCHING_FAILED:
        return {
          ...state,
          fetchingMember: false,
          error: action.payload
        }
    default:
      return state;
  }
}