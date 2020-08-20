import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Input,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
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
import Timer from "../components/Timer";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { stubArray } from "lodash";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-navigation";
// import { } from "react-native-gesture-handler";

const WIDTH = Dimensions.get("window").width * 0.95;
const SCREEN_WIDTH = Dimensions.get("window").width;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;
const SCREEN_HEIGHT = Dimensions.get("window").height;

// pull data from sheet 2
// if there are no logs for that exercise, give the default DETAILS of 4 sets of 5 reps each at 10 lb
// if there are logs for that exercise, input the last DETIALS, aswell as the diplay the history and the exercise number for that history

{
  /* <LineChart
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
      /> */
}

const workoutDetailsScreen = (props) => {
  const [chartData, setChartData] = useState([]);
  const [xData, setXData] = useState([]);
  const [yDataWeight, setYDataWeight] = useState([]);
  const [yDataSets, setYDataSets] = useState([]);
  const [yDataReps, setYDataReps] = useState([]);

  // const [repsValue1, setRepsValue1] = useState();
  // const [weightValue1, setWeightValue1] = useState();

  const [exerciseLogData, setExerciseLogData] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  // LOADING DATA LOGIC STARTS
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
        // XDATA.push(log.date.slice(5, 10));
        // YDATAWEIGHT.push(log.weight);
        // THIS DOES NOT WORK :()
        setXData([...xData, log.date.slice(5, 10)]);
        setYDataWeight([...yDataWeight, log.weight.toString()]);
        setYDataSets([...yDataSets, log.sets.toString()]);
        setYDataReps([...yDataReps, log.reps.toString()]);
      }
      i++;
    });

    //
    //
    //
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

  // LOADING DATA LOGIC ENDS

  // FLASTLIST LOGIC STARTS

  useEffect(() => {
    console.log("exerciseLogData: ", exerciseLogData);
  }, [exerciseLogData]);

  useEffect(() => {
    flatListLogic();
  }, [yDataSets]);

  const flatListLogic = () => {
    let masterArray = [];

    // make an array with the number of sets
    // fill the array with the demoLogDataObj
    for (let i = 0; i < yDataSets[0]; i++) {
      const demoLogDataObj = {
        arrayNumber: i,
        setNumber: null,
        reps: yDataReps[0], // data from last recorded exercise is used as starting point for this exercise
        weight: yDataWeight[0], // data from last recorded exercise is used as starting point for this exercise
      };

      masterArray.push(demoLogDataObj);
    }
    // console.log("masterArray.length:  ", masterArray.length);
    // console.log("masterArray:  ", masterArray);

    // store the array in the exerciseLogData state
    setExerciseLogData([...masterArray]);
  };

  // FLASTLIST LOGIC ENDS

  // TIMER FUNCTIONALITY START

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const addSeconds = (_seconds) => {
    if (seconds + _seconds > 60) {
      setMinutes(minutes + 1);
      setSeconds(seconds + _seconds - 60);
    } else if (seconds + _seconds == 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    } else {
      setSeconds(seconds + _seconds);
    }
  };
  const removeSeconds = (_seconds) => {
    if (seconds - _seconds < 0 && minutes >= 1) {
      setMinutes(minutes - 1);
      setSeconds(seconds - _seconds + 60);
    } else if (seconds - _seconds == 0) {
      console.log("60!!!");
      setSeconds(0);
    } else {
      setSeconds(seconds - _seconds);
    }
  };

  const toggleStart = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (minutes <= 0 && seconds == 0) {
        setIsActive(false);
        clearInterval(interval);
      } else if (seconds == 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const reset = () => {
    setSeconds(0);
    setMinutes(3);
    setIsActive(false);
  };

  // TIMER FUNCTIONALITY ENDS

  return (
    <BackGround>
      {/* <SafeAreaView> */}
      <View style={styles.exerciseLogDataContainer}>
        <View style={styles.titleBarContainer}>
          <View style={styles.titleBar}></View>
          <Text style={styles.titleBarText}>{yDataSets[0]} Sets</Text>

          <View style={styles.timeContainer}>
            <MaterialCommunityIcons name="timer" size={24} color="white" />
            <Text style={{ color: "white", paddingTop: 3 }}>ON</Text>
          </View>
        </View>
        <View style={styles.box}></View>
        {/* <View style={{ flex: 1 }}> */}
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          // bounces={false}
          data={exerciseLogData}
          contentContainerStyle={{ paddingBottom: 72 }}
          keyExtractor={(result) => {
            // console.log('result.arrayNumber.toString():  ',result.arrayNumber.toString())
            // return "string";
            return result.arrayNumber.toString();
          }}
          renderItem={({ item }) => {
            // console.log("item.arrayNumber:  ", item.arrayNumber);
            return (
              <View style={styles.logCardContainer}>
                <View style={styles.box}></View>
                <View style={styles.logDataContainer}>
                  <CircleWithText text={item.arrayNumber + 1} />
                  <TextInput
                    style={styles.rep_WeightNumber}
                    // onChangeText={(text) => setRepsValue1(text)}

                    onChangeText={(text) => {
                      const dummyArray = [...exerciseLogData];
                      dummyArray[item.arrayNumber].reps = text;
                      console.log("dummyArray:  ", dummyArray);

                      setExerciseLogData([...dummyArray]);
                    }}
                    defaultValue={item.reps}
                    // value={repsValue1}
                    keyboardType={"number-pad"}
                  />
                  <Text style={styles.repText}>REPS</Text>
                  <Text style={styles.repDivider}> /</Text>
                  <TextInput
                    style={styles.rep_WeightNumber}
                    // onChangeText={(text) => setWeightValue1(text)}
                    defaultValue={item.weight}
                    // value={weightValue1}
                    keyboardType={"number-pad"}
                  />
                  <Text style={styles.repText}>LB</Text>
                </View>
                <View style={styles.box}></View>
                <View style={styles.restTimerContainer}>
                  <View style={styles.timerBox}></View>
                  <TouchableOpacity
                    style={styles.clockContainer}
                    onPress={() => {
                      console.log("press called!");
                      setModalOpen(!modalOpen);
                    }}
                  >
                    <MaterialCommunityIcons
                      name="timer"
                      size={30}
                      color="white"
                    />
                    <Text style={styles.clockText}>
                      {minutes}:{seconds < 10 && seconds >= 0 ? "0" : null}
                      {seconds}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.box}></View>

        {/* </View> */}
      </View>
      {/*  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.modalTimerControlsContainer}>
              <Button
                // title="decrease"
                type="clear"
                onPress={() => removeSeconds(15)}
                icon={<Entypo name="back-in-time" size={50} color="black" />}
              />
              <Text style={styles.modalTimeText}>
                {minutes}:{seconds < 10 && seconds >= 0 ? "0" : null}
                {seconds}
              </Text>
              <Button
                type="clear"
                // title="increase"
                onPress={() => addSeconds(15)}
                icon={
                  <Entypo
                    name="back-in-time"
                    size={50}
                    color="black"
                    style={{ transform: [{ rotateY: "180deg" }] }}
                  />
                }
              />
            </View>
            <TouchableOpacity
              style={{ backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalOpen(!modalOpen);
              }}
            >
              <Text style={styles.modalText}>Close Rest Timer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* </SafeAreaView> */}
    </BackGround>
  );
};

const styles = StyleSheet.create({
  exerciseLogDataContainer: {
    // flexDirection: "row",
  },
  titleBarContainer: {
    flexDirection: "row",
    paddingTop: 20,
    // paddingBottom: 40,
    // position:'absolute'
  },
  titleBar: {
    width: SCREEN_WIDTH,
    height: 1,
    backgroundColor: "white",
    marginTop: 12,
  },
  titleBarText: {
    color: "red",
    marginTop: 20,
    height: 20,
    backgroundColor: "#000717",
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 18,
    position: "absolute",
    left: "39%",
    zIndex: 1,
  },
  timeContainer: {
    flexDirection: "row",
    backgroundColor: "#000717",
    position: "absolute",
    right: 0,
    paddingRight: 6,
    marginTop: 20,
  },
  logCardContainer: {
    // backgroundColor: "black",
    // position: 'relative'
  },

  box: {
    // position:'absolute',
    // backgroundColor: "green",
    borderRightWidth: 2,
    borderRightColor: "white",
    height: 40,
    width: 45,
  },
  logDataContainer: {
    // backgroundColor: "yellow",
    flexDirection: "row",
  },
  rep_WeightNumber: {
    fontSize: 30,
    color: "white",
    // width: 38,
    height: 40,
    // backgroundColor: "red",
    marginLeft: 10,
    marginRight: 10,
  },
  repText: {
    fontSize: 30,
    color: "white",
  },
  repDivider: {
    color: "grey",
    fontSize: 30,
  },
  restTimerContainer: {
    // backgroundColor: "red",
    // height: 20,
    width: SCREEN_WIDTH,
    flexDirection: "row",
  },
  timerBox: {
    // backgroundColor: "green",
    // height: 20,
    width: 29,
  },
  timer: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  clockContainer: {
    // width: SCREEN_WIDTH,
    // height: 200,
    flexDirection: "row",
    // backgroundColor: "red",
  },
  clockText: {
    fontSize: 25,
  },
  ///////
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTimerControlsContainer: {
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
  },

  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTimeText: {
    // backgroundColor: "green",
    // marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 30,
    textAlign: "center",
  },

  modalText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
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
