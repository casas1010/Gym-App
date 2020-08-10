import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  LOG_OUT,
} from "../actions/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };

    case FACEBOOK_LOGIN_FAIL:
      return { token: null };

    case LOG_OUT:
      navigate("AuthScreen");
      return { token: null };

    default:
      return state;
  }
};

export default authReducer;
