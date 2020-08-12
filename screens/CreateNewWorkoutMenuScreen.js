import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";

import { BlurView } from "expo-blur";

// iconds for OPTIONS
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import TopMenu from "../components/TopMenu";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.2;

const OPTIONS = [
  {
    title: "Generate your next workout",
    details: "Create a complete workout from your muscle state & gym settings.",
    logo: <Ionicons name="ios-body" size={40} color="black" />,
  },
  {
    title: "Target individual muscle groups",
    details:
      "Generate a workout that targets the muscle groups of your choice.",
    logo: <MaterialCommunityIcons name="target" size={40} color="black" />,
  },
  {
    title: "Pick a starting exercise",
    details:
      "Select one or more and let Pootie Tang fill in the rest of your workout.",
    logo: <MaterialCommunityIcons name="pickaxe" size={40} color="black" />,
  },
  {
    title: "Create a workout from scratch",
    details: "Compose your workout by selecting individual exercises",
    logo: <Entypo name="add-to-list" size={40} color="black" />,
  },
];

const CreateNewWorkoutMenuScreen = (props) => {
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
            <View style={styles.displayCard}>
              {element.item.logo}
              <Text>{element.item.title}</Text>
              <Ionicons name="ios-arrow-forward" size={40} color="black" />
            </View>
          );
        }}
      />
    </BlurView>
  );
};
const styles = StyleSheet.create({
  displayCard: {
    flexDirection: "row",
  },
  topMenu: {
    flexDirection: "row",
  },
  nonBlurredContent: {
    paddingTop: 30,
  },
  text: {
    color: "white",
  },
});

export default CreateNewWorkoutMenuScreen;
