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
} from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import BackGround from "../components/BackGround";

const ExerciseDetailsScreen = (props) => {
  
  useEffect(() => {
    console.log('props.exercises[0]:',props.exercises[0])
  }, [])

  return (
    <BackGround>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {props.exercises[0].exerciseName}</Text>
          <Text style={styles.subTitle}>{props.exercises[0].primaryMuscle}</Text>
        </View>
        <View style={styles.videoContiner}>
          <Text>VIDEO GOES HERE</Text>
        </View>
        <Text style={styles.description}>{props.exercises[0].description}</Text>
        <View style={styles.muscleDescriptionContainer}>
          <Text style={styles.muscleDescription}>{props.exercises[0].primaryMuscle}</Text>
          <Text style={styles.muscleDescription}>{props.exercises[0].secondaryMuscle}</Text>
        </View>
        <Image
          style={styles.machineImage}
          source={{ uri: props.exercises[0].anatomyPicture }}
        />
      </ScrollView>
    </BackGround>
  );
};

// ExerciseDetailsScreen.navigationOptions = (props) => ({
//   title: "Review Jobs",
//   headerRight: () => (
//     <Button
//       title="Settings"
//       onPress={() => {
//             props.navigation.navigate('details')
//       }}
//     />
//   ),
// });



const styles = StyleSheet.create({
  description:{
    fontSize: 20,
    color: "#bfbfbf",
  },
  titleContainer: {
    marginLeft: 25,
    marginBottom: 25,
  },
  title: {
    fontSize: 25,
    color: "white",
    marginBottom: 15,
  },
  equipmentPicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginLeft: 7,
  },
  subTitle: {
    fontSize: 20,
    color: "#b3b3b3",
  },
  itemContainer: {
    backgroundColor: "red",
  },
});

function mapStateToProps({ auth, exercise }) {
  return { exercises: exercise.exercises };
}

// export default ExerciseDetailsScreen;
export default connect(mapStateToProps, null)(ExerciseDetailsScreen);
