import { connect } from "react-redux";
import * as actions from "../actions/";

import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import CreateNewWorkoutMenuScreen from "./CreateNewWorkoutMenuScreen";
import BackGround from "../components/BackGround";
import ResultsList from "../components/ResultsList";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width * 0.95;

const SCREEN_WIDTH = Dimensions.get("window").width;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const PickedExercisesScreen = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pickedMuscleExerciseData, setPickedMuscleExerciseData] = useState();
  const [pickedExercises, setPickedExercises] = useState([]);

  useEffect(() => {
    retrievePickedExercises();
    setPickedMuscleExerciseData(primaryMuscleDataCount());
    console.log("PickedExercisesScreen");
  }, [props.exercises]);

  const retrievePickedExercises = () => {
    let pickedExerciseArr = [];
    //
    props.exercises.forEach((exercise) => {
      if (exercise.isSelect == true) {
        pickedExerciseArr.push(exercise);
      }
    });
    //
    setPickedExercises([...pickedExerciseArr]);
  };

  const changeModal = () => {
    setModalOpen(false);
  };

  const primaryMuscleDataCount = () => {
    // obtain count of unique primaryMuscle values
    let counts = {};
    for (let i = 0; i < pickedExercises.length; i++) {
      counts[pickedExercises[i].primaryMuscle] =
        1 + (counts[pickedExercises[i].primaryMuscle] || 0);
    }
    // console.log("counts:  ", counts);
    // change the counts to percentage
    let countsPercentage = {};
    Object.keys(counts).forEach((key) => {
      // console.log("key:  ", key);
      countsPercentage[key] = (counts[key] / pickedExercises.length) * 100;
    });

    // console.log("countsPercentage:  ", countsPercentage);

    // //get the picture of each main muscle
    let muscleData = [];
    Object.keys(countsPercentage).forEach((key) => {
      pickedExercises.forEach((exercise) => {
        //
        //
        if (key == exercise.primaryMuscle) {
          muscleData.push({
            primaryMuscle: exercise.primaryMuscle,
            percentage: countsPercentage[key],
            anatomyPicture: exercise.anatomyPicture,
          });
        }
      });
    });

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
    return output;
    // setPickedMuscleExerciseData(output);

    //END OF FUNCTION
  };

  if (!pickedExercises.length) {
    return (
      <BackGround>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: 20,
          }}
        >
          Add an exercise to start building your workout!
        </Text>
        <Button
          title="Add an exercise"
          type="clear"
          icon={<AntDesign name="plus" size={24} color="white" />}
          onPress={() => props.navigation.navigate("search")}
        />
      </BackGround>
    );
  }

  return (
    // MUSCLE % TOP DISPLAY LIST
    <BackGround>
      <View style={styles.muscleDataContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={pickedMuscleExerciseData}
          keyExtractor={(result) => result.primaryMuscle}
          renderItem={({ item }) => {
            return (
              <View style={styles.muscleDataCard}>
                <Text style={styles.muscleDataText}>{item.primaryMuscle}</Text>
                <View>
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.anatomyPicture }}
                    alt={item.exerciseName}
                  />
                </View>
                <Text style={styles.muscleDataText}>
                  {(Math.round(item.percentage * 100) / 100).toFixed(0) + "%"}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <Button
        title="Add an exercise"
        type="clear"
        icon={<AntDesign name="plus" size={24} color="white" />}
        onPress={() => props.navigation.navigate("search")}
      />

      <FlatList //DISPLAY EXERCISES PICKED
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={pickedExercises}
        keyExtractor={(result) => result.exerciseName}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                console.log(
                  `Card with exercise '${item.exerciseName}' was clicked`
                );
                props.navigation.navigate("workoutDetailsScreen", item);
              }}
            >
              <Image
                style={styles.cardImage}
                source={{ uri: item.anatomyPicture }}
                alt={item.exerciseName}
              />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{item.exerciseName}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {!pickedExercises.length ? null : (
        <Button
          title="START WORKOUT"
          containerStyle={{
            backgroundColor: "red",
            width: SCREEN_WIDTH * 0.5,
            position: "absolute",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            right: 30,
            bottom: 30,
          }}
          onPress={() => console.log("start!!!")}
          titleStyle={{ fontSize: 15 }}
          type="clear"
          icon={
            <MaterialCommunityIcons name="weight" size={24} color="black" />
          }
        />
      )}

      {/* PREVIOS CODE BELOW */}
      <View style={styles.container}>
        <Button title="turn on Modal" onPress={() => setModalOpen(true)} />
        <Modal animationType="fade" transparent={true} visible={modalOpen}>
          <CreateNewWorkoutMenuScreen
            callBack={changeModal}
            navigation={props.navigation}
          />
        </Modal>
      </View>
    </BackGround>
  );
};
var styles = StyleSheet.create({
  // MUSCLE CARD CSS
  muscleDataContainer: {
    height: SCREEN_HEIGHT * 0.2,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  muscleDataCard: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
    marginLeft: 10,
    marginRight: 10,
  },
  muscleDataText: {
    fontSize: 15,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  // CARD CSS
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    width: WIDTH,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  cardImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginLeft: 7,
  },
  cardTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cardText: {
    fontSize: 20,
    color: "white",
    paddingBottom: 3,
  },
});

PickedExercisesScreen.navigationOptions = (screenProps) => ({
  title: "",
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
        // console.log("screenProps.state:  ", screenProps.state);
        // console.log('props:  ', props)
      }}
    />
  ),
  headerLeft: () => (
    <Button // LEFT BUTTON
      title="  + New"
      textStyle={{ color: "white", fontWeight: "bold" }}
      buttonStyle={{ backgroundColor: "#000c23", width: BUTTON_WIDTH }}
      onPress={() => {
        setModalOpen(true);
      }}
    />
  ),
});

function mapStateToProps({ exercise }) {
  return { exercises: exercise.exercises };
}
export default connect(mapStateToProps, actions)(PickedExercisesScreen);

// export default PickedExercisesScreen;
