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

const ExerciseDetailsScreen = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const { name } = props.navigation.state.params;

    // console.log(filterResultsByName(name));
    setData(filterResultsByName(name));
  }, []);

  const filterResultsByName = (name) => {
    return props.exercises.filter((result) => {
      // console.log('name:    ',name)
      // console.log('result:  ',result.exerciseName);
      return result.exerciseName === name;
    });
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>{data.exerciseName}</Text>
      <Text>DISPLAY VIDEO HERE</Text>
      <Text>hi</Text>
      <Text>hi</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
title:{

}
});

function mapStateToProps({ auth, exercise }) {
  return { exercises: exercise.exercises };
}

// export default ExerciseDetailsScreen;
export default connect(mapStateToProps, null)(ExerciseDetailsScreen);
