import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";

const DATA = [
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
  { name: "Item 4" },
];

// // // //

export default class DropDown extends React.Component {
  render() {
    if (this.props.show) {
      const { y: top, x: left } = this.props.position;
      const width = 100;
      return (
        <TouchableWithoutFeedback
          onPress={() => this.props.hide("background pressed")}
        >
          <View style={styles.container}>
            <View style={[styles.menu, { top, left: left - width / 2, width }]}>
              <FlatList
                data={DATA}
                keyExtractor={(item) => item.name}
                renderItem={(element) => {
                  return (
                    <TouchableOpacity
                      style={{ width, alignItems: "center", paddingTop: 5 }}
                      onPress={() => this.props.hide(element.item.name)}
                    >
                      <Text>{element.item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 100,
    alignItems: "center",
    paddingVertical: 5,
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menu: {
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
