import { FETCH_EXERCISES } from "../actions/types";

const exerciseReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXERCISES:      
      return { exercises: action.payload };
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













