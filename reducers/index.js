import { combineReducers } from "redux";
import auth from "./auth_reducer";
import exercise from "./exercise_reducer";
import pickedExercise from "./pickedExercise_reducer";

export default combineReducers({
  auth,
  exercise,
  pickedExercise,
});
