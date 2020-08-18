import { FETCH_EXERCISES, TOGGLE_EXERCISE_IS_SELECT } from "../actions/types";

// case 'edit_blogpost':
//   return state.map(blogPost => {
//     return blogPost.id === action.payload.id ? action.payload : blogPost;
//   });

const exerciseReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXERCISES:
      return { exercises: action.payload };
    case TOGGLE_EXERCISE_IS_SELECT:
      console.log("TOGGLE_EXERCISE_IS_SELECT REDUCER ACTIVE");
      // console.log(typeof state.exercises);
      const newState = [];
      state.exercises.forEach((exercise) => {
        if (exercise == action.payload) {
          newState.push(action.payload);
        } else {
          newState.push(exercise);
        }
        // console.log(exercise);
      });
      return {exercises: [...newState]};

    // state.exercises.map((exercise) => {
    //   if (exercise == action.payload) {
    //     newState.push(action.payload);
    //   } else {
    //     newState.push(exercise);
    //   }
    // });
    // console.log(newState);
    // return newState;

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
