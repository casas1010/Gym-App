// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   FlatList,
//   SafeAreaView,
//   Dimensions,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { Button } from "react-native-elements";

// import { connect } from "react-redux";
// import * as actions from "../actions/index";

// import SearchBar from "../components/SearchBar";
// import useResults from "../hooks/useResults";
// import ResultsList from "../components/ResultsList";
// import ListCard from "../components/ListCard";
// import BackGround from "../components/BackGround";
// const SCREEN_WIDTH = Dimensions.get("window").width;
// const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;

// // PULL ALLL IMAGES FROM HERE: https://www.britannica.com/science/human-muscle-system/The-abdomen

// const SearchScreen = (props) => {
//   const [term, setTerm] = useState("");

//   const openCardDetails = (name) => {
//     console.log(`card ${name} has been clicked!`);
//     props.navigation.navigate("details", {
//       name: name,
//     });
//   };

//   const filterExercisesByName = (name) => {
//     name=name.toLowerCase()
//     return props.exercises.filter((result) => {
//       return result.exerciseName.toLowerCase() == name;
//     });
//   };

//   return (
//     <BackGround>
//       <SafeAreaView>
//         <SearchBar
//           term={term}
//           onTermChange={setTerm}
//           onTermSubmit={() => {
//             console.log(`term searched is ${term}`);
//             console.log( filterExercisesByName('ab Rollout'))
//           }}
//         />
//         <FlatList
//           horizontal={false}
//           style={styles.list}
//           keyExtractor={(element) => element.exerciseName}
//           data={props.exercises}
//           renderItem={(element) => {
//             // console.log('element.item:  ',element.item.exerciseName);
//             return (
//               <ListCard
//                 imageURL={element.item.anatomyPicture}
//                 name={element.item.exerciseName}
//                 callBack={openCardDetails}
//               />
//             );
//           }}
//         />
//       </SafeAreaView>
//     </BackGround>
//   );
// };

// const styles = StyleSheet.create({
//   list: {
//     paddingLeft: 15,
//     paddingTop: 20,
//     paddingRight: 15,
//   },
// });

// SearchScreen.navigationOptions = (props) => ({
//   title: "",
//   headerStyle: {
//     backgroundColor: "#000c23",
//     shadowRadius: 0,
//     shadowOffset: {
//       height: 0,
//     },
//   },

//   headerRight: () => (
//     <Button //RIGHT BUTTON
//       title="  . . .     "
//       buttonStyle={{ width: BUTTON_WIDTH, backgroundColor: "#000c23" }}
//       textStyle={{ color: "white", fontSize: 100, fontWeight: "bold" }}
//       onPress={() => {
//         console.log("3 buttons presses");
//       }}
//     />
//   ),
//   headerLeft: () => (
//     <Button // LEFT BUTTON
//       title="  + New"
//       textStyle={{ color: "white", fontSize: 100, fontWeight: "bold" }}
//       buttonStyle={{ backgroundColor: "#000c23", width: BUTTON_WIDTH }}
//       onPress={() => {
//         console.log("+ New pressed");
//       }}
//     />
//   ),
// });

// // export default SearchScreen;
// function mapStateToProps({ auth, exercise }) {
//   return { exercises: exercise.exercises };
// }

// export default connect(mapStateToProps, actions)(SearchScreen);

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button } from "react-native-elements";

import { connect } from "react-redux";
import * as actions from "../actions/index";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ListCard from "../components/ListCard";
import BackGround from "../components/BackGround";
import ResultsList from "../components/ResultsList";

const SCREEN_WIDTH = Dimensions.get("window").width;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;

// PULL ALLL IMAGES FROM HERE: https://www.britannica.com/science/human-muscle-system/The-abdomen

const SearchScreen = (props) => {
  const [term, setTerm] = useState("Ab Rollout");

  const openCardDetails = (name) => {
    console.log(`card ${name} has been clicked!`);
    props.navigation.navigate("details", {
      name: name,
    });
  };

  const filterExercisesByName = (name) => {
    name = name.toLowerCase();
    return props.exercises.filter((result) => {
      return result.exerciseName.toLowerCase() == name;
    });
  };

  return (
    <BackGround>
      <SafeAreaView>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => {
            console.log(`term searched is ${term}`);
            console.log(filterExercisesByName(term));
          }} 
        />
        <ResultsList results={filterExercisesByName(term)} navigation={props.navigation} />
      </SafeAreaView>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingLeft: 15,
    paddingTop: 20,
    paddingRight: 15,
  },
});

SearchScreen.navigationOptions = (props) => ({
  title: "",
  headerStyle: {
    backgroundColor: "#000c23",
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },

  headerRight: () => (
    <Button //RIGHT BUTTON
      title="  . . .     "
      buttonStyle={{ width: BUTTON_WIDTH, backgroundColor: "#000c23" }}
      textStyle={{ color: "white", fontSize: 100, fontWeight: "bold" }}
      onPress={() => {
        console.log("3 buttons presses");
      }}
    />
  ),
  headerLeft: () => (
    <Button // LEFT BUTTON
      title="  + New"
      textStyle={{ color: "white", fontSize: 100, fontWeight: "bold" }}
      buttonStyle={{ backgroundColor: "#000c23", width: BUTTON_WIDTH }}
      onPress={() => {
        console.log("+ New pressed");
      }}
    />
  ),
});

// export default SearchScreen;
function mapStateToProps({ auth, exercise }) {
  return { exercises: exercise.exercises };
}

export default connect(mapStateToProps, actions)(SearchScreen);
