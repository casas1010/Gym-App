import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Modal } from "react-native";
import { Button } from "react-native-elements";
import CreateNewWorkoutMenuScreen from "./CreateNewWorkoutMenuScreen";
import BackGround from "../components/BackGround";

const SCREEN_WIDTH = Dimensions.get("window").width;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;

const PickedExercisesScreen = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const changeModal = () => {
    setModalOpen(false);
  };

  return (
     <BackGround>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the React Native Playground!
        </Text>
        <Button title="turn on Modal" onPress={() => setModalOpen(true)} />
        <Modal animationType="fade" transparent={true} visible={modalOpen}>
          <CreateNewWorkoutMenuScreen callBack={changeModal} />
        </Modal>
      </View>
    </BackGround>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },

});
//
//
//
//

PickedExercisesScreen.navigationOptions = (props) => ({
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
        setModalOpen(true);
      }}
    />
  ),
});

export default PickedExercisesScreen;

// import React, { useState } from "react";
// import {
//   Alert,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   Dimensions,
//   View
// } from "react-native";
// import { Button } from "react-native-elements";

// const SCREEN_WIDTH = Dimensions.get("window").width;
// const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;

// const PickedExercisesScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}
//       >

//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>

//             <TouchableHighlight
//               style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </TouchableHighlight>
//           </View>
//         </View>

//       </Modal>

//       <TouchableHighlight
//         style={styles.openButton}
//         onPress={() => {
//           setModalVisible(true);
//         }}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "red",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5
//   },
//   openButton: {
//     backgroundColor: "#F194FF",
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

// PickedExercisesScreen.navigationOptions = ({navigation}) => ({
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
//         // props.setModalVisible(true);
//         // console.log('navigation.setParams:   ',navigation.setParams(setModalVisible(true)))
//         console.log('not working')
//       }}
//     />
//   ),
// });

// export default PickedExercisesScreen;
