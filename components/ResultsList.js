import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

import ListCard from "./ListCard";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const ResultsList = ({ results, navigation, allResults, screen, onPressCallBack }) => {
  const [pickedMuscleExerciseData, setPickedMuscleExerciseData] = useState([]);
  useEffect(() => {
    console.log('ResultsList screen')
    // console.log('allResults:  ',allResults)
    primaryMuscleDataCount();
  }, [results]);

  const primaryMuscleDataCount = () => {
    // obtain count of unique primaryMuscle values
    let counts = {};
    for (let i = 0; i < results.length; i++) {
      counts[results[i].primaryMuscle] =
        1 + (counts[results[i].primaryMuscle] || 0);
    }
    console.log('counts:  ',counts)
    // change the counts to percentage
    let countsPercentage = {};
    Object.keys(counts).forEach((key) => {
      // console.log("key:  ", key);
      countsPercentage[key] = (counts[key] / results.length) * 100;
    });

    console.log("countsPercentage:  ", countsPercentage);

    //get the picture of each main muscle
    let muscleData = [];
    Object.keys(countsPercentage).forEach((key) => {
      results.forEach((exercise) => {
        //
        //
        if (key == exercise.primaryMuscle) {
          muscleData.push({
            primaryMuscle: exercise.primaryMuscle,
            percentage: countsPercentage[key],
            anatomyPicture: exercise.anatomyPicture,
          });
        }
        //
        //
      });
    });
    //
    //
    var flags = [],
      output = [],
      l = muscleData.length,
      i;
    for (i = 0; i < l; i++) {
      if (flags[muscleData[i].primaryMuscle]) continue;
      flags[muscleData[i].primaryMuscle] = true;
      output.push(muscleData[i]);
    }

    // console.log("output:  ", output);
    setPickedMuscleExerciseData(output);

    //END OF FUNCTION
  };

  // if (!results.length && screen == "PickedExercisesScreen") {
  //   return (
  //     <Text
  //       style={{
  //         color: "white",
  //         fontSize: 20,
  //         textAlign: "center",
  //         fontWeight: "bold",
  //       }}
  //     >
  //       Add an exercise to start building your workout!
  //     </Text>
  //   );
  // }

  if (!results.length && screen == "SearchScreen") {
    // return null;
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
                exerciseName={item.exerciseName}
                primaryMuscle={item.primaryMuscle}
                screen="SearchScreen"
                onPressCallBack={onPressCallBack}
              />
            );
          }}
        />
      </View>
    );
  }

  return (
    <>
      {/* {screen == "PickedExercisesScreen" ? (
        <View
          style={{
            height: SCREEN_HEIGHT * 0.2,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={pickedMuscleExerciseData}
              keyExtractor={(result) => result.primaryMuscle}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "blue",
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    <View style={styles.textContainer}>
                      <Text style={styles.nameText}>{item.primaryMuscle}</Text>
                    </View>
                    <View
                    >
                      <Image
                        style={{height: 50,
                          width: 50,
                          borderRadius: 25,
                          borderWidth: 1,}}
                        source={{ uri: item.anatomyPicture }}
                        alt={item.exerciseName}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text
                      // style={styles.nameText}
                      >{`${item.percentage}%`}</Text>
                    </View>
                  </View>
                );
              }}
            />
          }
        </View>
      ) : (
        null
      )} */}

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
              onPressCallBack={onPressCallBack}
            />
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginLeft: 7,
  },
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
