import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

import DropMenu from "../components/DropMenu";

const DATA = [{ name: "Back" }, { name: "Chest" }, { name: "Abs" }];

const DeckScreen = (props) => {
  const [itemSelect, setItemSelect] = useState("");
  const [viewDislay, setViewDisplay] = useState(true);

  const setItem = (item) => {
    setItemSelect(item)
    changeDisplay();

  };

  const changeDisplay = () => {
    setViewDisplay(!viewDislay);
  };

  return (
    <SafeAreaView>
      <Button title={`Muscle ${itemSelect}`} onPress={() => changeDisplay()} />
      <DropMenu showList={viewDislay} data={DATA} callBack={setItem} />
      <Text>Random text</Text>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignContent: "center",
    alignItems: "center",
  },
});

export default DeckScreen;
