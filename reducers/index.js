import { combineReducers } from "redux";
import auth from "./auth_reducer";
import exercise from "./exercise_reducer";
import exerciseLog from "./exerciseLog_reducer";

export default combineReducers({
  auth,
  exercise,
  exerciseLog,
});
