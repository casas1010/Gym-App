import { ADD_EXERCISE, REMOVE_EXERCISE } from "./types";

export const pickExercise = (exerciseName) => {
  return {
    type: ADD_EXERCISE,
    payload: exerciseName,
  };
};

export const removeExercise = (exerciseName) => {
  return {
    type: REMOVE_EXERCISE,
    payload: exerciseName,
  };
};
