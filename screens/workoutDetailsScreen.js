import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit"; // https://developer.aliyun.com/mirror/npm/package/expo-chart-kit

import BackGround from "../components/BackGround";
import CircleWithText from "../components/CircleWithText";

import { AntDesign } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width * 0.95;
const SCREEN_WIDTH = Dimensions.get("window").width;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;
const SCREEN_HEIGHT = Dimensions.get("window").height;

// pull data from sheet 2
// if there are no logs for that exercise, give the default DETAILS of 4 sets of 5 reps each at 10 lb
// if there are logs for that exercise, input the last DETIALS, aswell as the diplay the history and the exercise number for that history

const workoutDetailsScreen = (props) => {
  const [chartData, setChartData] = useState([]);
  const [xData, setXData] = useState([]);
  const [yDataWeight, setYDataWeight] = useState([]);
  const [yDataSets, setYDataSets] = useState([]);
  const [yDataReps, setYDataReps] = useState([]);
  let XDATA = [];
  let YDATAWEIGHT = [];

  useEffect(() => {
    getExerciseLogs();
    console.log("workoutDetailsScreen");
    // console.log(props.navigation.state.params);
  }, []);

  const getExerciseLogs = () => {
    // get the data for that exercise
    const data = props.exerciseLog.filter(
      (exercise) =>
        props.navigation.state.params.exerciseName == exercise.exerciseName
    );
    // show the data in order from most recent to oldest    // THIS MIGHT NOT BE REQUIRED
    const sortedData = data.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    // setPastData([...sortedData]);
    // console.log('sortedData[0]:  ',sortedData[0])


    let i = 0;
    sortedData.forEach((log) => {
      if (i < 5) {
        XDATA.push(log.date.slice(5, 10));
        YDATAWEIGHT.push(log.weight);
        // THIS DOES NOT WORK :()
        // setXData([...xData, log.date.slice(5, 10)]);
        // setYDataWeight([...yDataWeight, log.weight]);
        // setYDataSets([...yDataSets, log.sets]);
        // setYDataReps([...yDataReps, log.reps]);
      }
      i++;
    });
    console.log(YDATAWEIGHT)
    // DOES NOT WORK
    // setChartData({
    //   labels: XDATA,
    //   datasets: [
    //     {
    //       data: YDATAWEIGHT,
    //     },
    //   ],
    // });
  };
  // getExerciseLogs();
  return (
    <BackGround>
      {/* <LineChart
        // yAxisLabel="$"
        // yAxisSuffix="k"
        data={{
          labels: XDATA,
          datasets: [{
            data: [YDATAWEIGHT]
          }]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#01184a",
          backgroundGradientFrom: "#01184a",
          backgroundGradientTo: "#00246b",
          // decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          // style: {
          //   borderRadius: 16,
          // },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      /> */}
      <View style={styles.exerciseLogDataContainer}>
        <View style={styles.titleBar}>{/* <Text>{xData[0]}</Text> */}</View>
        <CircleWithText text={0} />
      </View>
      {/* <Text>{xData[0]}</Text> */}
      <Text>{yDataSets[0]}</Text>
      <Text>{typeof yDataSets[0]}</Text>
      {/* <Text>{typeof yDataReps[0]}</Text> */}
    </BackGround>
  );
};

const styles = StyleSheet.create({
  exerciseLogDataContainer: {},
  titleBar: { width: SCREEN_WIDTH, height: 1, backgroundColor: "white" },
});

workoutDetailsScreen.navigationOptions = (props) => ({
  title: props.navigation.state.params.exerciseName,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#000c23",
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerRight: () => (
    <Button //RIGHT BUTTON
      iconRight
      icon={<AntDesign name="infocirlceo" size={24} color="white" />}
      buttonStyle={{ backgroundColor: "#000c23" }} // width: BUTTON_WIDTH,
      // textStyle={{ color: "white", fontWeight: "bold" }}
      onPress={() => {
        console.log("3 buttons presses");
        props.navigation.navigate("details", props.navigation.state.params);
      }}
    />
  ),
  headerLeft: () => (
    <Button // LEFT BUTTON
      iconLeft
      icon={<AntDesign name="left" size={25} color="white" />}
      // textStyle={{ color: "white", fontWeight: "bold" }}
      buttonStyle={{ backgroundColor: "#000c23" }}
      onPress={() => {
        console.log("go back was clicked");
        props.navigation.goBack();
      }}
    />
  ),
});

function mapStateToProps({ exerciseLog }) {
  return { exerciseLog };
}

export default connect(mapStateToProps)(workoutDetailsScreen);
