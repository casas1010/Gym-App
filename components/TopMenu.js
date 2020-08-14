import React from "react";
import { View, StyleSheet,Dimensions } from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.2;
const TopMenu = (props) => {
  return (
    <View style={styles.topMenu}>
      <Button
        // title="turn off Modal"
        icon={<AntDesign name="infocirlceo" size={24} color={props.iColor} />}
        textStyle={{ color: "white", fontSize: 100, fontWeight: "bold" }}
        buttonStyle={{ backgroundColor: "transparent", width: BUTTON_WIDTH }}
        onPress={() => {
          props.changeDetails();
          console.log('i button clicked!')
        }}
      />
      <ButtonGroup
        // onPress={  }
        buttons={["CREATE NEW", "SAVED WORKOUTS"]}
        containerStyle={{ width: BUTTON_WIDTH * 2.6 }}
        textStyle={{ color: "white", fontSize: 11, textAlign: "center" }}
        buttonStyle={{ backgroundColor: "#000c23" }}
        selectedIndex={0}
        selectedButtonStyle={{
          backgroundColor: "white",
        }}
        selectedTextStyle={{ color: "#000c23" }}
      />
      <Button
        // title="turn off Modal"
        icon={<MaterialIcons name="fullscreen-exit" size={24} color="white" />}
        textStyle={{ color: "white", fontSize: 100, fontWeight: "bold" }}
        buttonStyle={{ backgroundColor: "transparent", width: BUTTON_WIDTH }}
        onPress={() => {
        props.closeMenuCallback();
        // console.log('props:  ', props)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topMenu: {
    flexDirection: "row",
  },
});

export default TopMenu;
