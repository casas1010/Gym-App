import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableOpacityBase,
} from "react-native";
import { Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { connect } from "react-redux";
import * as actions from "../actions/index";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ListCard from "../components/ListCard";
import BackGround from "../components/BackGround";
import ResultsList from "../components/ResultsList";

const WIDTH = Dimensions.get("window").width * 0.95;
const SCREEN_WIDTH = Dimensions.get("window").width;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;

// PULL ALLL IMAGES FROM HERE: https://www.britannica.com/science/human-muscle-system/The-abdomen

const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const [allExercises, setAllExercises] = useState([]);

  useEffect(() => {
    console.log("SearchScreen");
    setDisplayProperties();
  }, []);

  const setDisplayProperties = () => {
    // const modExercises = [];
    // props.exercises.map((item) => {
    //   item.isSelect = false;
    //   modExercises.push(item);
    // });
    // setAllExercises([...modExercises]);
    setAllExercises([...props.exercises])
  };

  const toggleExerciseisSelect = (item) => {
    const allExercisesCopy = allExercises.map((exercise) => {
      if (exercise == item) {
        exercise.isSelect = !exercise.isSelect;
        return exercise;
      }
      return exercise;
    });
    setAllExercises([...allExercisesCopy]);
  };
  const checkisSelectProperty = (item) => {
    let returnValue = false;
    allExercises.forEach((exercise) => {
      if (exercise.isSelect == true) {
        returnValue = true;
      }
    });
    return returnValue;
  };

  const addExercisesToPickedExercise_reducer = () => {
    allExercises.forEach((exercise) => {
      exercise.isSelect ? props.pickExercise(exercise) : null;
    });
    props.navigation.navigate("WORKOUT");
  };

  const filterExercisesByName = (name) => {
    name = name.toLowerCase();
    return allExercises.filter((result) => {
      return result.exerciseName.toLowerCase().includes(name);
    });
  };

  return (
    <BackGround>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          console.log(`term searched is ${term}`);
        }}
      />
      <>
        <FlatList
          horizontal={false}
          extraData={allExercises}
          showsHorizontalScrollIndicator={false}
          data={filterExercisesByName(term)}
          keyExtractor={(result) => result.exerciseName}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: 10,
                  width: WIDTH,
                  paddingBottom: 5,
                  borderBottomWidth: 1,
                  // backgroundColor: item.isSelect ? "red" : "transparent",
                  borderBottomColor: "grey",
                }}
                onPress={() => {
                  console.log(
                    `Card with exercise '${item.exerciseName}' was clicked`
                  );

                  // props.navigation.navigate("details", item);   // DONT DELETE, THIS WORKS
                  toggleExerciseisSelect(item);
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.anatomyPicture }}
                  alt={item.exerciseName}
                />
                <View style={styles.cardTextContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: item.isSelect ? "red" : "white",
                      paddingBottom: 3,
                    }}
                  >
                    {item.exerciseName}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        {!checkisSelectProperty() ? null : (
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
            onPress={() => addExercisesToPickedExercise_reducer()}
            titleStyle={{ fontSize: 15 }}
            type="clear"
            icon={
              <MaterialCommunityIcons name="weight" size={24} color="black" />
            }
          />
        )}
      </>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    width: WIDTH,
    paddingBottom: 5,
    borderBottomWidth: 1,
    backgroundColor: "red",
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
  // cardText: {
  //   fontSize: 20,
  //   color: "white",
  //   paddingBottom: 3,
  // },
});

SearchScreen.navigationOptions = (props) => ({
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
      textStyle={{ color: "white", fontSize: 100, fontWeight: "bold" }}
      onPress={() => {
        console.log("3 buttons presses");
      }}
    />
  ),
  headerLeft: () => (
    <Button // LEFT BUTTON
      title="  + New"
      textStyle={{ color: "white", fontSize: 100, fontWeight: "bold" }}
      buttonStyle={{ backgroundColor: "#000c23", width: BUTTON_WIDTH }}
      onPress={() => {
        console.log("+ New pressed");
      }}
    />
  ),
});

// export default SearchScreen;
function mapStateToProps({ exercise, pickedExercise }) {
  return { exercises: exercise.exercises, pickedExercise: pickedExercise };
}

export default connect(mapStateToProps, actions)(SearchScreen);
