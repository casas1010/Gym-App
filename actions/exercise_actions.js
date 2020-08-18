import axios from "axios";
import { FETCH_EXERCISES, EDIT_EXERCISE } from "./types";

const makeTableFromData = (data, numberOfRows) => {
  console.log("processing data initialized");
  let rowArrays = [];
  let rowArraysNotHeader = [];
  let i = 1;

  // MAKE AN ARRAY FOR EVERY ROW (INCLUDING THE HEADER)
  for (let i = 0; i < numberOfRows; i++) {
    rowArrays.push([]);
  }
  // ADD THE DATA TO THE APPROPRIATE ARRAY
  for (let rowNumber = 1; rowNumber <= numberOfRows; rowNumber++) {
    data.forEach((cell) => {
      if (cell.gs$cell.row == rowNumber) {
        rowArrays[rowNumber - 1].push(cell.gs$cell.$t);
      }
    });
  }
  // SET THE TABLE DATA
  for (let i = 0; i < rowArrays.length; i++) {
    if (i > 0) {
      rowArraysNotHeader.push(rowArrays[i]);
    }
  }

  const masterArray = [];

  // ASSOCIATE KEY VALUE PAIRS
  rowArraysNotHeader.forEach((array) => {
    let exerciseData = {
      exerciseName: "",
      primaryMuscle: "",
      secondaryMuscle: "",
      animation: "",
      equipmentPicture: "",
      description: "",
      anatomyPicture: "",
      isSelect: false,
    };

    // console.log("this is run number:  ", i);
    //
    exerciseData.exerciseName = array[0];
    exerciseData.primaryMuscle = array[1];
    exerciseData.secondaryMuscle = array[2];
    exerciseData.animation = array[3];
    exerciseData.equipmentPicture = array[4];
    exerciseData.description = array[5];
    exerciseData.anatomyPicture = array[6];
    //
    masterArray.push(exerciseData);
    // console.log('masterArray conent:',masterArray)
    i++;
  });
  console.log("processing data complete");

  return masterArray;
};

const handleSubmit = async () => {
  console.log("API query initiated");
  let response;
  try {
    response = await axios.get(
      "https://spreadsheets.google.com/feeds/cells/1kJiM6a-an4HvjnKFYnBXg-KpkCw_tUW36dGOEM59qhQ/1/public/values?alt=json"
    );
  } catch (err) {
    console.log(err);
  }
  console.log("API query complete");
  return makeTableFromData(
    response.data.feed.entry,
    response.data.feed.gs$rowCount.$t
  );
};

export const fetchExercisesAction = () => async (dispatch) => {
  console.log("fetchExercisesAction()");
  let response = await handleSubmit();
  // console.log('response',response)
  dispatch({
    type: FETCH_EXERCISES,
    payload: response,
  });
};

export const fetchExercises = () => async (dispatch) => {
  // perform action
  dispatch(fetchExercisesAction());
};

export const toggleExercerseIsSelect = (exercise) => {
  exercise.isSelect = !exercise.isSelect;
  console.log("toggleExercerseIsSelect action, modified exercise:", exercise);
  return {
    type: TOGGLE_EXERCISE_IS_SELECT,
    payload: exercise,
  };
};
