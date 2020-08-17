import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { Button } from "react-native-elements";

import BackGround from "../components/BackGround";

const WIDTH = Dimensions.get("window").width * 0.95;

const SCREEN_WIDTH = Dimensions.get("window").width;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const listViewData = Array(20)
  .fill("")
  .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));
const workoutDetailsScreen = (props) => {
  useEffect(() => {
    // console.log("listViewData:   ", listViewData);
    console.log("workoutDetailsScreen");
    // console.log("props:  ", props);
  });
  return (
    <BackGround>
      <Text>workoutDetailsScreen</Text>
    </BackGround>
  );
};

const styles = StyleSheet.create({});

workoutDetailsScreen.navigationOptions = (props) => ({
  title: props.navigation.state.params.exerciseName,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: "#000c23",
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerRight: () => (
    <Button //RIGHT BUTTON
      title="  . . .     "
      buttonStyle={{ width: BUTTON_WIDTH, backgroundColor: "#000c23" }}
      textStyle={{ color: "white", fontWeight: "bold" }}
      onPress={() => {
        console.log("3 buttons presses");
        console.log(props.navigation.state.params.exerciseName)
        // console.log("screenProps.state:  ", screenProps.state);
        // console.log('props:  ', props)
      }}
    />
  ),
//   headerLeft: () => (
//     <Button // LEFT BUTTON
//       title="  + New"
//       textStyle={{ color: "white", fontWeight: "bold" }}
//       buttonStyle={{ backgroundColor: "#000c23", width: BUTTON_WIDTH }}
//       onPress={() => {
//         setModalOpen(true);
//       }}
//     />
//   ),
});

export default workoutDetailsScreen;
