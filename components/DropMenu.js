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
import { AppLoading } from "expo";

const DropMenu = (props) => {
  //   const [itemSelect, setItemSelect] = useState(null);
  if (props.showList) {
    return (
      <View style={styles.container}>
        <FlatList
          data={props.data}
          keyExtractor={(item) => item.name}
          renderItem={(element) => {
            return (
              <Button
                onPress={() => props.callBack(element.item.name)}
                title={element.item.name}
              />
            );
          }}
        />
      </View>
    );
  } else {
    return null;
  }
};

// DropMenu.defaultProps = {
//   showList: true,
//   data: [{ name: "jesus" }, { name: "albert" }, { name: "taco" }],
// };

const styles = StyleSheet.create({
  TouchableOpacity: {},
  container: {
    backgroundColor: "red",
    alignContent: "center",
    alignItems: "center",
  },
});

export default DropMenu;
