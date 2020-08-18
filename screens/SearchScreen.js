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
  TouchableOpacityBase,
} from "react-native";
import { Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { connect } from "react-redux";
import * as actions from "../actions/index";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ListCard from "../components/ListCard";
import BackGround from "../components/BackGround";
import ResultsList from "../components/ResultsList";

const WIDTH = Dimensions.get("window").width * 0.95;
const SCREEN_WIDTH = Dimensions.get("window").width;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;

// PULL ALLL IMAGES FROM HERE: https://www.britannica.com/science/human-muscle-system/The-abdomen

// const Item = ({ item, onPress, style }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
//     <Text style={styles.title}>{item.title}</Text>
//   </TouchableOpacity>
// );

const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const [allExercises, setAllExercises] = useState([]);

  useEffect(() => {
    console.log("SearchScreen");
    setDisplayProperties();
  }, []);

  const setDisplayProperties = () => {
    const modExercises = [];
    props.exercises.map((item) => {
      item.isSelect = false;
      // setAllExercises( [...allExercises,item])    // does not work for some reason?
      modExercises.push(item);
      // console.log("item with mod properties:", item);
    });
    setAllExercises([...modExercises]);
  };

  const toggleExerciseisSelect = (item) => {
    const allExercisesCopy = allExercises.map((exercise) => {
      if (exercise == item) {
        exercise.isSelect = !exercise.isSelect;
        return exercise;
      }
      return exercise;
    });
    setAllExercises([...allExercisesCopy]);
  };
  const checkisSelectProperty = (item) => {
    let returnValue = false;
    allExercises.forEach((exercise) => {
      if (exercise.isSelect == true) {
        returnValue = true;
      }
    });
    return returnValue;
  };

  const addExercisesToPickedExercise_reducer = () => {
    allExercises.forEach((exercise) => {
      exercise.isSelect?props.pickExercise(exercise):null;
    });
    // setPrePickedExercise([]);
    props.navigation.navigate("WORKOUT");
  };

  const filterExercisesByName = (name) => {
    name = name.toLowerCase();
    return allExercises.filter((result) => {
      return result.exerciseName.toLowerCase().includes(name);
    });
  };

  return (
    <BackGround>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          console.log(`term searched is ${term}`);
          // console.log(filterExercisesByName(term));
        }}
      />
      <>
        <FlatList
          horizontal={false}
          extraData={allExercises}
          showsHorizontalScrollIndicator={false}
          data={filterExercisesByName(term)}
          keyExtractor={(result) => result.exerciseName}
          renderItem={({ item }) => {
            // check if item is in setPrePickedExercise, if yes, change the background color to red, if not
            // change the background color to transparent
            // console.log("item props in render:", item);

            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: 10,
                  width: WIDTH,
                  paddingBottom: 5,
                  borderBottomWidth: 1,
                  // backgroundColor: item.isSelect ? "red" : "transparent",
                  borderBottomColor: "grey",
                }}
                onPress={() => {
                  console.log(
                    `Card with exercise '${item.exerciseName}' was clicked`
                  );

                  // props.navigation.navigate("details", item);   // DONT DELETE, THIS WORKS
                  toggleExerciseisSelect(item);
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.anatomyPicture }}
                  alt={item.exerciseName}
                />
                <View style={styles.cardTextContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: item.isSelect ? "red" : "white",
                      paddingBottom: 3,
                    }}
                  >
                    {item.exerciseName}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        {!checkisSelectProperty() ? null : (
          <Button
            title="START WORKOUT"
            containerStyle={{
              backgroundColor: "red",
              width: SCREEN_WIDTH * 0.5,
              position: "absolute",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              right: 30,
              bottom: 30,
            }}
            onPress={() => addExercisesToPickedExercise_reducer()}
            titleStyle={{ fontSize: 15 }}
            type="clear"
            icon={
              <MaterialCommunityIcons name="weight" size={24} color="black" />
            }
          />
        )}
      </>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    width: WIDTH,
    paddingBottom: 5,
    borderBottomWidth: 1,
    backgroundColor: "red",
    borderBottomColor: "grey",
  },
  cardImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginLeft: 7,
  },
  cardTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  // cardText: {
  //   fontSize: 20,
  //   color: "white",
  //   paddingBottom: 3,
  // },
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
function mapStateToProps({ exercise, pickedExercise }) {
  return { exercises: exercise.exercises, pickedExercise: pickedExercise };
}

export default connect(mapStateToProps, actions)(SearchScreen);

//  https://medium.com/better-programming/how-to-highlight-and-multi-select-items-in-a-flatlist-component-react-native-1ca416dec4bc

// import React from "react";
// import {
//   StyleSheet,
//   View,
//   ActivityIndicator,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { Icon } from "react-native-elements";
// // import { enText } from "../lang/en";

// export default class SearchScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       dataSource: [],
//     };
//   }
//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = () => {
//     this.setState({ loading: true });

//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => response.json())
//       .then((responseJson) => {
//         responseJson = responseJson.map((item) => {
//           item.isSelect = false;
//           item.selectedClass = styles.list;

//           return item;
//         });

//         this.setState({
//           loading: false,
//           dataSource: responseJson,
//         });
//       })
//       .catch((error) => {
//         this.setState({ loading: false });
//       });
//   };

//   FlatListItemSeparator = () => <View style={styles.line} />;

//   selectItem = (data) => {
//     data.item.isSelect = !data.item.isSelect;
//     data.item.selectedClass = data.item.isSelect
//       ? styles.selected
//       : styles.list;

//     const index = this.state.dataSource.findIndex(
//       (item) => data.item.id === item.id
//     );

//     this.state.dataSource[index] = data.item;

//     this.setState({
//       dataSource: this.state.dataSource,
//     });
//   };

//   goToStore = () =>
//     this.props.navigation.navigate("Expenses", {
//       selected: this.state.selected,
//     });

//   renderItem = (data) => (
//     <TouchableOpacity
//       style={[styles.list, data.item.selectedClass]}
//       onPress={() => this.selectItem(data)}
//     >
//       <Image
//         source={{ uri: data.item.thumbnailUrl }}
//         style={{ width: 40, height: 40, margin: 6 }}
//       />
//       <Text style={styles.lightText}>
//         {" "}
//         {data.item.title.charAt(0).toUpperCase() +
//           data.item.title.slice(1)}{" "}
//       </Text>
//     </TouchableOpacity>
//   );

//   render() {
//     const itemNumber = this.state.dataSource.filter((item) => item.isSelect)
//       .length;
//     if (this.state.loading) {
//       return (
//         <View style={styles.loader}>
//           <ActivityIndicator size="large" color="purple" />
//         </View>
//       );
//     }

//     return (
//       <View style={styles.container}>
//         {/* <Text style={styles.title}>{enText.productsAvailable}</Text> */}
//         <FlatList
//           data={this.state.dataSource}
//           ItemSeparatorComponent={this.FlatListItemSeparator}
//           renderItem={(item) => this.renderItem(item)}
//           keyExtractor={(item) => item.id.toString()}
//           extraData={this.state}
//         />

//         <View style={styles.numberBox}>
//           <Text style={styles.number}>{itemNumber}</Text>
//         </View>

//         <TouchableOpacity style={styles.icon}>
//           <View>
//             <Icon
//               raised
//               name="shopping-cart"
//               type="font-awesome"
//               color="#e3e3e3"
//               size={30}
//               onPress={() => this.goToStore()}
//               containerStyle={{ backgroundColor: "#FA7B5F" }}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#192338",
//     paddingVertical: 50,
//     position: "relative",
//   },
//   title: {
//     fontSize: 20,
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   list: {
//     paddingVertical: 5,
//     margin: 3,
//     flexDirection: "row",
//     backgroundColor: "#192338",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     zIndex: -1,
//   },
//   lightText: {
//     color: "#f7f7f7",
//     width: 200,
//     paddingLeft: 15,
//     fontSize: 12,
//   },
//   line: {
//     height: 0.5,
//     width: "100%",
//     backgroundColor: "rgba(255,255,255,0.5)",
//   },
//   icon: {
//     position: "absolute",
//     bottom: 20,
//     width: "100%",
//     left: 290,
//     zIndex: 1,
//   },
//   numberBox: {
//     position: "absolute",
//     bottom: 75,
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     left: 330,
//     zIndex: 3,
//     backgroundColor: "#e3e3e3",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   number: { fontSize: 14, color: "#000" },
//   selected: { backgroundColor: "#FA7B5F" },
// });
