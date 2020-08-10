import { AsyncStorage } from "react-native";
import * as Facebook from "expo-facebook";
// import firebase from "firebase";

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL, LOG_OUT } from "./types";

// redux thunk requires to use dispatch

// facebook login decision workflow
export const facebookLogin = () => async (dispatch) => {
    // get the fb token if it is there
  let token = await AsyncStorage.getItem("fb_token");

  // check the value of that token
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
    console.log("start fb login");
  }
};

// starts facebooklogin flow
const doFacebookLogin = async (dispatch) => {
  Facebook.initializeAsync("300020044475971", "ScanApp");

  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    "300020044475971",
    {
      permissions: ["public_profile"],
    }
  );

  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  // if it makes it this far, it means that you have login succesfully
  // doFireBaseLogin(token);
  await AsyncStorage.setItem("fb_token", token);

  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};




// const doFireBaseLogin = async (token) => {
//   const credential = firebase.auth.FacebookAuthProvider.credential(token);

//   // Sign in with credential from the Facebook user.
//   firebase
//     .auth()
//     .signInWithCredential(credential)
//     .catch((error) => {
//       // alert(error);
//       console.log(error);
//     });
//   console.log("firebase signed in");
// };

// //

// export const signout = () => async () => {
//   await AsyncStorage.removeItem("fb_token");
//   await doFireBaseLogout();
//   return {
//     type: LOG_OUT,
//     payload: "",
//   };
// };


// const doFireBaseLogout = async () => {
//   firebase
//     .auth()
//     .signOut()
//     .then(
//       function () {
//         console.log("signout successful");
//       },
//       function (error) {
//         console.log("signout failed ");
//         console.log(error);
//       }
//     );
// };
