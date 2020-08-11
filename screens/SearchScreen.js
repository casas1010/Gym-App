import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions/index";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = (props) => {
  // const [data,setData]= useState();

  useEffect(() => {
    // props.fetchExercises();
    // setData(props.exercises)
    // console.log("useEffect");
    // console.log(props.exercises);
    // console.log('exercises.exercises',exercises.exercises)
  }, []);

  // return(
  //   <Text>hi</Text>
  // )

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        keyExtractor={(element) => element.exerciseName}
        data={props.exercises}
        renderItem={(element) => {
          // console.log('element.item:  ',element.item.exerciseName);
          return (
            <View style={styles.itemDisplay}>
              <Text style={styles.text}>{element.item.exerciseName}</Text>
            </View>
          );
        }}
      />
      <Text>{}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
  },
  itemDisplay: {
    backgroundColor: 'red'
  }
});

// export default SearchScreen;
function mapStateToProps({ auth, exercise }) {
  return { exercises: exercise.exercises };
}

export default connect(mapStateToProps, actions)(SearchScreen);
