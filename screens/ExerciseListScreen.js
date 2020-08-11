import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import { SafeAreaView } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";
import BackGround from "../components/BackGround";

const ExerciseListScreen = (props) => {
  return (

        <View>
          <Text style={styles.headerText}>
            Add an exercise to start building your workout.
          </Text>

          <Button
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            type="clear"
            title={"Add an exercise"}
            onPress={() => console.log(props.navigation.navigate("LIST"))}
            icon={
              <AntDesign
                name="plus"
                size={24}
                color="white"
                style={{ paddingRight: 30 }}
              />
            }
          />
        </View>
      
    
  );
};
const styles = StyleSheet.create({
  headerText: {
    color: "white",
    fontSize: 20,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
  },
  addExercise: {
    width: 100,
    height: 100,
    backgroundColor: "white",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
  },
  buttonStyle: {
    paddingTop: 10,
  },
});
// const WorkOutScreen = {<BackGround elements={WorkOutScreen2} />;

// const WorkOutScreen =()=> {
//   return <BackGround  />
// }
export default ExerciseListScreen;
