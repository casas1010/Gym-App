import { FETCH_EXERCISES,TOGGLE_EXERCISE_IS_SELECT } from "../actions/types";

const exerciseReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXERCISES:
      return { exercises: action.payload };
    case TOGGLE_EXERCISE_IS_SELECT:
      return state.map((exercise) => {
        return exercise.exerciseName === action.payload.exerciseName ? action.payload : exercise;
      });
    default:
      return state;
  }
};

export default exerciseReducer;

/*


  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  // if it makes it this far, it means that you have login succesfully
  await AsyncStorage.setItem("fb_token", token);

  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });


*/
