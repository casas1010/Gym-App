import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ListCard from "./ListCard";

const ResultsList = ({ results, navigation, allResults }) => {
  useEffect(() => {
    // console.log("results.length:  ", results.length);
  }, [results]);

  if (!results.length) {
    // return null;
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={allResults}
          keyExtractor={(result) => result.exerciseName}
          renderItem={({ item }) => {
            return (
              <ListCard
                anatomyPicture={item.anatomyPicture}
                animation={item.animation}
                description={item.description}
                equipmentPicture={item.equipmentPicture}
                exerciseName={item.exerciseName}
                primaryMuscle={item.primaryMuscle}
                secondaryMuscle={item.secondaryMuscle}
                callBack={navigation.navigate}
              />
            );
          }}
        />
      </View>
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
              anatomyPicture={item.anatomyPicture}
              animation={item.animation}
              description={item.description}
              equipmentPicture={item.equipmentPicture}
              exerciseName={item.exerciseName}
              primaryMuscle={item.primaryMuscle}
              secondaryMuscle={item.secondaryMuscle}
              callBack={navigation.navigate}
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
