import { ADD_EXERCISE, REMOVE_EXERCISE } from "../actions/types";

const pickedExercise_reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      //   return { exercise: action.payload };
      return _.uniqBy([action.payload, ...state], "barcode");

    case REMOVE_EXERCISE: // NOT SURE IF THIS WILL WORK
      return state.filter((item) => item.exersieName !== action.payload);

    default:
      return state;
  }
};

export default pickedExercise_reducer;
