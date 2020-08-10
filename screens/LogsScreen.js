import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const LogsScreen = (props) => {
  return (
    <View>
      <Text>{console.log(props.navigation.navigate("LIST"))}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default LogsScreen;
 