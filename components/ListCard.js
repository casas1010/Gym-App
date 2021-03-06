// import React, { useEffect,useState } from "react";
// import {
//   View,
//   Image,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import { connect } from "react-redux";
// import * as actions from "../actions/index";

// const MAX_LIM = 15;
// const WIDTH = Dimensions.get("window").width * 0.95;

// const ListCard = ({
//   anatomyPicture,
//   animation,
//   description,
//   equipmentPicture,
//   exerciseName,
//   primaryMuscle,
//   secondaryMuscle,
//   callBack,
// }) => {
//   const [addExercise, setAddExercise] = useState();

//   return (
//     <TouchableOpacity
//       style={styles.itemContainer}
//       onPress={() => {
//         // callBack(name);
//         console.log("ListCard callback");
//         console.log("exerciseName: ", exerciseName);
//         callBack("details", {
//           anatomyPicture,
//           animation,
//           description,
//           equipmentPicture,
//           exerciseName,
//           primaryMuscle,
//           secondaryMuscle,
//         });
//       }}
//     >
//       <Image
//         style={styles.image}
//         source={{ uri: anatomyPicture }}
//         alt={exerciseName}
//       />
//       <View style={styles.textContainer}>
//         <Text style={styles.nameText}>{exerciseName}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   itemContainer: {
//     flex: 1,
//     flexDirection: "row",
//     marginTop: 10,
//     width: WIDTH,
//     paddingBottom: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: "grey",
//   },
//   image: {
//     height: 50,
//     width: 50,
//     borderRadius: 25,
//     borderWidth: 1,
//     marginLeft: 7,
//   },
//   textContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//   },
//   nameText: {
//     fontSize: 20,
//     color: "white",
//     paddingBottom: 3,
//   },
// });

// // export default ListCard;
// export default connect(null, actions)(ListCard);

import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions/index";

const MAX_LIM = 15;
const WIDTH = Dimensions.get("window").width * 0.95;

const ListCard = ({
  anatomyPicture,
  animation,
  description,
  equipmentPicture,
  exerciseName,
  primaryMuscle,
  secondaryMuscle,
  onPressCallBack,
  pickExercise,
  screen,
}) => {
  const [addExercise, setAddExercise] = useState();

  useEffect(() => {
    console.log("ListCard component is render");
  }, []);

  const onPressCallBackHelper = () => {
    if (screen == "SearchScreen") {
      onPressCallBack("details", {
        anatomyPicture,
        animation,
        description,
        equipmentPicture,
        exerciseName,
        primaryMuscle,
        secondaryMuscle,
      });
    } else if ((screen = "PickedExercisesScreen")) {
      onPressCallBack({
        anatomyPicture,
        animation,
        description,
        equipmentPicture,
        exerciseName,
        primaryMuscle,
        secondaryMuscle,
      });
    }
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        console.log(`Card with exercise '${exerciseName}' was clicked`);
        console.log(onPressCallBack)
        // onPressCallBackHelper();
      }}
    >
      <Image
        style={styles.image}
        source={{ uri: anatomyPicture }}
        alt={exerciseName}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{exerciseName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    width: WIDTH,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginLeft: 7,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    color: "white",
    paddingBottom: 3,
  },
});

// export default ListCard;
export default connect(null, actions)(ListCard);
