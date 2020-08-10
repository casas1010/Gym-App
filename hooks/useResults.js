import { useEffect, useState } from "react";
import yelp from "../api/spreedsheet";
import axios from "axios";

const getAllExercises = (data) => {
  let allExercises = [];
  data.forEach((element) => {
    if (element.gs$cell.col == 1) {
      // console.log(element.gs$cell.$t)
      allExercises.push(element.gs$cell.$t);
    }
  });
  console.log(allExercises);
  return allExercises;
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
        exerciseNames: getAllExercises(response.data.feed.entry),
        data: response.data.feed.entry,
        numberOfRows: response.data.feed.gs$rowCount,
        numberOfColumns: response.data.feed.gs$colCount,
      });
      // console.log('data',response.data.feed.entry) // DELETE ME
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi(); // pull all data from cloud, no search term required
  }, []);

  return [searchApi, results, errorMessage];
};
