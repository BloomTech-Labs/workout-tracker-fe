import {
    UPDATE_STATUS_START,
    UPDATE_STATUS_SUCCESS,
    UPDATE_STATUS_FAILED,
    GET_MEMBERS
  } from "../actions/index";
  
  import { FETCHING, FETCHING_FAILED, FETCHING_SUCCESS } from '../actions/index';
  
  const initialState = {
    updatingStats: false,
    error: null,
    loading: false
  };
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_STATUS_START:
        return {
          ...state,
          updatingStats: true,
          error: null,
          loading: true
        };
      case UPDATE_STATUS_SUCCESS:
        return {
          ...state,updatingStats: false,
          error: null,
          status: action.payload,
          loading: false
        };
      case UPDATE_STATUS_FAILED:
        return {
          ...state,
          fetchingStatus: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
