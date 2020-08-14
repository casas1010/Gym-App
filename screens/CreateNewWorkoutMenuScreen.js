import React, { Component, useState } from "react";
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
      "Select one or more exercises and let Pootie Tang fill in the rest of your workout.",
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
  const [details, setDetails] = useState(false);
  const [iColor, setIColor] = useState("white");

  const goToDifferentScreen = (destination) => {
    props.callBack();
    props.navigation.navigate(destination);
  };

  const changeDetails = () => {
    setDetails(!details);
    changeIColor();
  };

  const changeIColor = () => {


    if (iColor == "white") {
      setIColor("#272c33");
    } else {
      setIColor("white");
    }
  };

  return (
    <BlurView
      intensity={100}
      style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
    >
      <TopMenu
        closeMenuCallback={props.callBack}
        changeDetails={changeDetails}
        iColor={iColor}
      />
      <FlatList
        horizontal={false}
        style={styles.list}
        keyExtractor={(element) => element.title}
        data={OPTIONS}
        renderItem={(element) => {
          return (
            <TouchableOpacity
              onPress={() => goToDifferentScreen(element.item.destination)}
            >
              <View style={styles.topCardContainer}>
                <View style={styles.logo}>{element.item.logo}</View>

                <Text style={styles.text}>{element.item.title}</Text>

                <Ionicons
                  style={styles.icon}
                  name="ios-arrow-forward"
                  size={20}
                  color="black"
                />
              </View>
              <View style={styles.bottomCardContainer}>
                <View style={styles.detailTextContainer}>
                  {details ? (
                    <Text style={styles.detailText}>
                      {element.item.details}
                    </Text>
                  ) : null}
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
  nonBlurredContent: {
    paddingTop: 30,
  },
  topCardContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
  },
  logo: {
    width: SCREEN_WIDTH * (2 / 10),
    alignItems: "center",
  },
  text: {
    width: SCREEN_WIDTH * (7 / 10),
    fontSize: 16,
  },
  icon: {
    width: SCREEN_WIDTH * (1 / 10),
    alignItems: "center",
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  bottomCardContainer: {
    marginLeft: SCREEN_WIDTH * (2 / 10),
    borderBottomWidth: 1,
    borderBottomColor: "#000c23",
  },
  detailTextContainer: {
    width: SCREEN_WIDTH * (7 / 10),
    paddingBottom: 10,
  },
  detailText: {
    color: "#272c33",
  },
});

export default CreateNewWorkoutMenuScreen;
