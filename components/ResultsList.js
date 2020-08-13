import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ListCard from "./ListCard";
{
  /* <TouchableOpacity
onPress={() =>
  navigation.navigate(ite)
}
>
</TouchableOpacity> */
}

const ResultsList = ({ results, navigation, allResults }) => {
  useEffect(() => {
    console.log('results.length:  ',results.length)
  });

  if (!results.length) {
    // return null;
    return (
      <FlatList
        horizontal={false}
        showsHorizontal
        ScrollIndicator={false}
        data={allResults}
        keyExtractor={(result) => result.exerciseName}
        renderItem={({ item }) => {
          return (
            <ListCard
              imageURL={item.anatomyPicture}
              name={item.exerciseName}
              callBack={navigation.navigate}
              data={results}
            />
          );
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.exerciseName}
        renderItem={({ item }) => {
          return (
            <ListCard
              imageURL={item.anatomyPicture}
              name={item.exerciseName}
              callBack={navigation.navigate}
              data={results}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
