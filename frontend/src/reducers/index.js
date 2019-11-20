import login from "./login";
import signUp from "./signUp";
import { combineReducers } from "redux";

export default combineReducers({
  login,
  signUp
});
