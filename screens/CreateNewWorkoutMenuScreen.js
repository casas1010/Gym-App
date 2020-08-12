import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { BlurView } from "expo-blur";

// iconds for OPTIONS
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import TopMenu from "../components/TopMenu";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const OPTIONS = [
  {
    title: "Generate your next workout",
    details: "Create a complete workout from your muscle state & gym settings.",
    logo: <Ionicons name="ios-body" size={40} color="black" />,
    destination: "search",
  },
  {
    title: "Target individual muscle groups",
    details:
      "Generate a workout that targets the muscle groups of your choice.",
    logo: <MaterialCommunityIcons name="target" size={40} color="black" />,
    destination: "search",
  },
  {
    title: "Pick a starting exercise",
    details:
      "Select one or more and let Pootie Tang fill in the rest of your workout.",
    logo: <MaterialCommunityIcons name="pickaxe" size={40} color="black" />,
    destination: "search",
  },
  {
    title: "Create a workout from scratch",
    details: "Compose your workout by selecting individual exercises",
    logo: <Entypo name="add-to-list" size={30} color="black" />,
    destination: "search",
  },
];

const CreateNewWorkoutMenuScreen = (props) => {

  const goToDifferentScreen =(destination) =>{
    props.callBack()
    props.navigation.navigate(destination);
  }


  return (
    <BlurView
      intensity={100}
      style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
    >
      <TopMenu callBack={props.callBack} />
      <FlatList
        horizontal={false}
        style={styles.list}
        keyExtractor={(element) => element.title}
        data={OPTIONS}
        renderItem={(element) => {
          // console.log("element.item:  ", element.item);
          return (
            <TouchableOpacity onPress={() => goToDifferentScreen(element.item.destination)}>
              <View style={styles.displayCard}>
                <View style={styles.logo}>{element.item.logo}</View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{element.item.title}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Ionicons
                    style={styles.icon}
                    name="ios-arrow-forward"
                    size={20}
                    color="black"
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </BlurView>
  );
};
const styles = StyleSheet.create({
  displayCard: {
    flexDirection: "row",
    // paddingTop: 30,
    // backgroundColor:'red',

    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
    flex: 1,
  },
  topMenu: {
    flexDirection: "row",
  },
  nonBlurredContent: {
    paddingTop: 30,
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#000c23",
    height: "100%",
    // backgroundColor:'green',
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 30,
  },
  logo: {
    width: SCREEN_WIDTH * (2 / 10),
    alignItems: "center",
  },
  text: {
    width: SCREEN_WIDTH * (7 / 10),
    fontSize: 16,
    // backgroundColor:'red'
  },
  icon: {
    width: SCREEN_WIDTH * (1 / 10),
    // backgroundColor:'green',

    alignItems: "center",
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
});

export default CreateNewWorkoutMenuScreen;
