import {
  ADD_EXERCISE,
  REMOVE_EXERCISE,
  CALULATE_PRIMARY_MUSCLE_PERCENTAGE,
} from "./types";

export const pickExercise = (exerciseObj) => {
  console.log('pickExercise() action invoked')
  console.log(`${exerciseObj.exerciseName} is being added to store!` )
  return {
    type: ADD_EXERCISE,
    payload: exerciseObj,
  };
};

export const removeExercise = (exerciseName) => {
  return {
    type: REMOVE_EXERCISE,
    payload: exerciseName,
  };
};

/*


const primaryMuscleDataCount = () => {
  // obtain count of unique primaryMuscle values
  let counts = {};
  for (let i = 0; i < results.length; i++) {
    counts[results[i].primaryMuscle] =
      1 + (counts[results[i].primaryMuscle] || 0);
  }
  // change the counts to percentage
  let countsPercentage = {};
  Object.keys(counts).forEach((key) => {
    // console.log("key:  ", key);
    countsPercentage[key] = (counts[key] / results.length) * 100;
  });

  console.log("countsPercentage:  ", countsPercentage);

  //get the picture of each main muscle
  let muscleData = [];
  Object.keys(countsPercentage).forEach((key) => {
    results.forEach((exercise) => {
      //
      //
      if (key == exercise.primaryMuscle) {
        muscleData.push({
          primaryMuscle: exercise.primaryMuscle,
          percentage: countsPercentage[key],
          anatomyPicture: exercise.anatomyPicture,
        });
      }
      //
      //
    });
  });
  //
  //
  var flags = [],
    output = [],
    l = muscleData.length,
    i;
  for (i = 0; i < l; i++) {
    if (flags[muscleData[i].primaryMuscle]) continue;
    flags[muscleData[i].primaryMuscle] = true;
    output.push(muscleData[i]);
  }

  // console.log("output:  ", output);
  setPickedMuscleExerciseData(output);

  //END OF FUNCTION
};

*/

export const calculatePrimaryMusclesPercentage = (data) => {
  return {
    type: CALULATE_PRIMARY_MUSCLE_PERCENTAGE,
    payload: data,
  };
};
