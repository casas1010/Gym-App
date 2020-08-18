import { ADD_EXERCISE, REMOVE_EXERCISE } from "../actions/types";
import _ from "lodash";
import fakeData from "../fakeData";

const exerciseLog_reducer = (state = [...fakeData], action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      return [action.payload, ...state];
    case REMOVE_EXERCISE: // NOT SURE IF THIS WILL WORK
      return state.filter((item) => item.exersieName !== action.payload);

    default:
      return state;
  }
};

export default exerciseLog_reducer;
