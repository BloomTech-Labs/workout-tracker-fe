import login from "./login";
import signUp from "./signUp";
import exerciseRecord from "./exerciseRecord";
import userInfo from "./userInfo";
import graphs from "./graphs";
import calories from './calories'
import muscle from './muscle'
import { combineReducers } from "redux";
export default combineReducers({
  login,
  signUp,
  exerciseRecord,
  userInfo,
  graphs,
  calories,
  muscle
});