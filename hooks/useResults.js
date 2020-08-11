import { useEffect, useState } from "react";
import yelp from "../api/spreedsheet";
import axios from "axios";

const makeTableFromData = (data, numberOfRows) => {
  console.log("processing data initialized");
  let rowArrays = [];
  let rowArraysNotHeader = [];

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

  let exerciseData = {
    exerciseName: "",
    primaryMuscle: "",
    secondaryMuscle: "",
    animation: "",
    equipmentPicture: "",
    description: "",
    anatomyPicture: "",
  };

  // ASSOCIATE KEY VALUE PAIRS
  rowArraysNotHeader.forEach((array) => {
    exerciseData.exerciseName = array[0];   
    exerciseData.primaryMuscle = array[1];
    exerciseData.secondaryMuscle = array[2];
    exerciseData.animation = array[3];
    exerciseData.equipmentPicture = array[4];
    exerciseData.description = array[5];
    exerciseData.anatomyPicture = array[6];

    // console.log('exerciseName:       ',exerciseData.exerciseName);
    // console.log('primaryMuscle:      ',exerciseData.primaryMuscle);
    // console.log('secondaryMuscle:    ',exerciseData.secondaryMuscle);
    // console.log('animation:          ',exerciseData.animation);
    // console.log('equipmentPicture:   ',exerciseData.equipmentPicture);
    // console.log('description:        ',exerciseData.description);
    // console.log('anatomyPicture:     ',exerciseData.anatomyPicture);
    masterArray.push(exerciseData);
  });

  return masterArray;
};

export default () => {
  const [results, setResults] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("API query initiated");
    try {
      const response = await axios.get(
        "https://spreadsheets.google.com/feeds/cells/1kJiM6a-an4HvjnKFYnBXg-KpkCw_tUW36dGOEM59qhQ/1/public/values?alt=json"
      );
      setResults({
        data: makeTableFromData(
          response.data.feed.entry,
          response.data.feed.gs$rowCount.$t
        ),
      });
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  
  console.log("API query complete");
  useEffect(() => {
    searchApi(); // pull all data from cloud, no search term required
  }, []);

  return [searchApi, results, errorMessage];
};

/*
import { useEffect, useState } from "react";
import yelp from "../api/spreedsheet";
import axios from "axios";


// USE IN THE FUTURE FOR AN IMPROVEMENT
// const formatData = (data, numberOfRows) => {
//   console.log("data formating initiated");
//   let allExercises = [];
//   //
//   //
//   let exerciseData = {
//     exerciseName: "",
//     primaryMuscle: "",
//     secondaryMuscle: "",
//     animation: "",
//     equipmentPicture: "",
//     description: "",
//     anatomyPicture: "",
//   };

//   // iterate over all cells
//   data.forEach((element) => {
//     // for every row after 1, make a new object
//     for (let i = 2; i <= numberOfRows; i++) {

//     }
//     //
//   });

//   for (let row = 2; row < numberOfRows; row++) {
//     console.log("row#: ", element.gs$cell.row);
//     console.log("cell value:   ", element.gs$cell.$t);
//   }

//   return allExercises;
// };



const makeTableFromData = (data,numberOfRows) => {
  console.log('processing data initialized')
  let rowArrays = [];
  let rowArraysNotHeader = [];

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
  // console.log('rowArrays:  ',rowArrays)
  console.log('data processing complete')
  return rowArrays;
};




export default () => {
  const [results, setResults] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("API query initiated");
    try {
      const response = await axios.get(
        "https://spreadsheets.google.com/feeds/cells/1kJiM6a-an4HvjnKFYnBXg-KpkCw_tUW36dGOEM59qhQ/1/public/values?alt=json"
      );
      setResults({
        data: makeTableFromData(response.data.feed.entry,response.data.feed.gs$rowCount.$t)
      });
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  console.log('API query complete')
  useEffect(() => {
    searchApi(); // pull all data from cloud, no search term required
  }, []);

  return [searchApi, results, errorMessage];
};




*/
