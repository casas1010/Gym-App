import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import YouTube from "react-native-youtube";

const ExerciseDetailsScreen = (props) => {
  const [data, setData] = useState({});
  const [isReady, setIsReady] = useState();
  const [status, setStatus] = useState();
  const [quality, setQuality] = useState();
  const [error, setErrror] = useState();

  useEffect(() => {
    const { name } = props.navigation.state.params;

    // console.log(filterResultsByName(name));
    setData(filterResultsByName(name));
  });

  const filterResultsByName = (name) => {
    return props.exercises.filter((result) => {
      // console.log('name:    ',name)
      // console.log('result:  ',result.exerciseName);
      return result.exerciseName === name;
    });
  };

  return (
    <SafeAreaView>


    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {},
  itemContainer:{
    backgroundColor:'red'
  }
});

function mapStateToProps({ auth, exercise }) {
  return { exercises: exercise.exercises };
}

// export default ExerciseDetailsScreen;
export default connect(mapStateToProps, null)(ExerciseDetailsScreen);
