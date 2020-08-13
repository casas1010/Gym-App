import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Button,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import BackGround from "../components/BackGround";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CONTAINER_WIDTH = SCREEN_WIDTH * 0.5;

const ExerciseDetailsScreen = (props) => {
  const {
    anatomyPicture,
    animation,
    description,
    equipmentPicture,
    exerciseName,
    primaryMuscle,
    secondaryMuscle,
  } = props.navigation.state.params;

  useEffect(() => {
    console.log("ExerciseDetailsScreen");
    console.log(
      "props.navigation.state.params:",
      props.navigation.state.params
    );
  });

  return (
    <BackGround>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {exerciseName}</Text>
          <Text
            style={styles.subTitle}
          >{`${primaryMuscle}, ${secondaryMuscle}`}</Text>
        </View>
        <View style={styles.videoContiner}>
          <Text>VIDEO GOES HERE</Text>
          <Text>VIDEO GOES HERE</Text>
          <Text>VIDEO GOES HERE</Text>
          <Text>VIDEO GOES HERE</Text>
        </View>
        <View style={styles.equipmentImageContainer}>
          <Image
            style={styles.equipmentImage}
            source={{ uri: equipmentPicture }}
          />
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.muscleDescriptionContainer}>
          <View style={styles.leftContainer}>
            {/* <View style={{ width: '70%'}}> */}
            <Text style={styles.muscleTitleText}>Primary</Text>
            <Text style={styles.muscleSubTitleText}>{primaryMuscle}</Text>
            {/* </View> */}
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.muscleTitleText}>Secondary</Text>
            <Text style={styles.muscleSubTitleText}>{secondaryMuscle}</Text>
          </View>
        </View>
      </ScrollView>
    </BackGround>
  );
};



const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: 25,
    marginBottom: 25,
  },
  title: {
    fontSize: 25,
    color: "white",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 20,
    color: "#b3b3b3",
  },
  videoContiner: {},
  equipmentImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: CONTAINER_WIDTH 
  },
  equipmentImage: {
    height: 50,
    width: 50,
  },
  description: {
    fontSize: 20,
    color: "#bfbfbf",
    marginLeft: 25,
    marginBottom: 25,
  },
  muscleDescriptionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  leftContainer: {
    // backgroundColor: "red",
    width: CONTAINER_WIDTH,
  },

  muscleTitleText: {
    fontSize: 15,
    color: "#b3b3b3",
    textAlign: "center",
  },
  muscleSubTitleText: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
  },

  rightContainer: {
    // backgroundColor: "blue",
    width: CONTAINER_WIDTH,
  },

  // muscleDescriptionTitleContainer: {
  //   // textAlign:'center',
  //   flexDirection: "row",
  // },
  // muscleTitleText: {
  //   textAlign: "center",

  //   backgroundColor: "red",
  //   width: SCREEN_WIDTH * 0.5,
  // },
  // primarymuscleDescription: {
  //   fontSize: 20,
  //   color: "#b3b3b3",
  // },
  // secondaryMuscleDescription: {
  //   fontSize: 20,
  //   color: "#b3b3b3",
  // },
  // equipmentImage: {},
});

export default ExerciseDetailsScreen;

// function mapStateToProps({ auth, exercise }) {
//   return { exercises: exercise.exercises };
// }

// export default connect(mapStateToProps, null)(ExerciseDetailsScreen);
