import login from "./login";
import signUp from "./signUp";
import exerciseRecord from "./exerciseRecord";
import userInfo from "./userInfo";
import addingExercise from "./addingExercise";
import { combineReducers } from "redux";
export default combineReducers({
  login,
  signUp,
  exerciseRecord,
  userInfo,
  addingExercise
});
