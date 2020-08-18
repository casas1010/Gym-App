// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import { Button } from "react-native-elements";
// import { connect } from "react-redux";

// import BackGround from "../components/BackGround";

// const WIDTH = Dimensions.get("window").width * 0.95;
// const SCREEN_WIDTH = Dimensions.get("window").width;
// const BUTTON_WIDTH = SCREEN_WIDTH * 0.3;
// const SCREEN_HEIGHT = Dimensions.get("window").height;

// // pull data from sheet 2
// // if there are no logs for that exercise, give the default DETAILS of 4 sets of 5 reps each at 10 lb
// // if there are logs for that exercise, input the last DETIALS, aswell as the diplay the history and the exercise number for that history

// const workoutDetailsScreen = (props) => {
//   useEffect(() => {
//     // console.log(props.exerciseLog)
//     getExerciseLogs();
//     console.log("workoutDetailsScreen");
//   });

//   const getExerciseLogs = () => {
//     // get the data for that exercise
//     const data = props.exerciseLog.filter(
//       (exercise) =>
//         props.navigation.state.params.exerciseName == exercise.exerciseName
//     );
//     // show the data in order from most recent to oldest
//     const sortedData = data.sort(function (a, b) {
//       return new Date(b.date) - new Date(a.date);
//     });
//     console.log(sortedData);
//   };

//   return (
//     <BackGround>
//       <Text>workoutDetailsScreen</Text>
//     </BackGround>
//   );
// };

// const styles = StyleSheet.create({});

// workoutDetailsScreen.navigationOptions = (props) => ({
//   title: props.navigation.state.params.exerciseName,
//   headerTitleStyle: {
//     fontWeight: "bold",
//   },
//   headerTintColor: "#fff",
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
//       textStyle={{ color: "white", fontWeight: "bold" }}
//       onPress={() => {
//         console.log("3 buttons presses");
//         console.log(props.navigation.state.params.exerciseName);
//         // console.log("screenProps.state:  ", screenProps.state);
//         // console.log('props:  ', props)
//       }}
//     />
//   ),
//   //   headerLeft: () => (
//   //     <Button // LEFT BUTTON
//   //       title="  + New"
//   //       textStyle={{ color: "white", fontWeight: "bold" }}
//   //       buttonStyle={{ backgroundColor: "#000c23", width: BUTTON_WIDTH }}
//   //       onPress={() => {
//   //         setModalOpen(true);
//   //       }}
//   //     />
//   //   ),
// });

// function mapStateToProps({ exerciseLog }) {
//   return { exerciseLog };
// }

// export default connect(mapStateToProps)(workoutDetailsScreen);



// @flow
import React from 'react';
import {
  StyleSheet, View, SafeAreaView, Dimensions, Animated, TextInput,
} from 'react-native';
import { Svg } from 'expo';
import * as path from 'svg-path-properties';
import * as shape from 'd3-shape';

import {
  scaleTime,
  scaleLinear,
  scaleQuantile,
} from 'd3-scale';

const {
  Path, Defs, LinearGradient, Stop,
} = Svg;
const d3 = {
  shape,
};

const height = 200;
const { width } = Dimensions.get('window');
const verticalPadding = 5;
const cursorRadius = 10;
const labelWidth = 100;

const data = [
  { x: new Date(2018, 9, 1), y: 0 },
  { x: new Date(2018, 9, 16), y: 0 },
  { x: new Date(2018, 9, 17), y: 200 },
  { x: new Date(2018, 10, 1), y: 200 },
  { x: new Date(2018, 10, 2), y: 300 },
  { x: new Date(2018, 10, 5), y: 300 },
];

const scaleX = scaleTime().domain([new Date(2018, 9, 1), new Date(2018, 10, 5)]).range([0, width]);
const scaleY = scaleLinear().domain([0, 300]).range([height - verticalPadding, verticalPadding]);
const scaleLabel = scaleQuantile().domain([0, 300]).range([0, 200, 300]);
const line = d3.shape.line()
  .x(d => scaleX(d.x))
  .y(d => scaleY(d.y))
  .curve(d3.shape.curveBasis)(data);
const properties = path.svgPathProperties(line);
const lineLength = properties.getTotalLength();

export default class workoutDetailsScreen extends React.Component {
  cursor = React.createRef();

  label = React.createRef();

  state = {
    x: new Animated.Value(0),
  };

  moveCursor(value) {
    const { x, y } = properties.getPointAtLength(lineLength - value);
    this.cursor.current.setNativeProps({ top: y - cursorRadius, left: x - cursorRadius });
    const label = scaleLabel(scaleY.invert(y));
    this.label.current.setNativeProps({ text: `${label} CHF` });
  }

  componentDidMount() {
    this.state.x.addListener(({ value }) => this.moveCursor(value));
    this.moveCursor(0);
  }

  render() {
    const { x } = this.state;
    const translateX = x.interpolate({
      inputRange: [0, lineLength],
      outputRange: [width - labelWidth, 0],
      extrapolate: 'clamp',
    });
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Svg {...{ width, height }}>
            <Defs>
              <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
                <Stop stopColor="#CDE3F8" offset="0%" />
                <Stop stopColor="#eef6fd" offset="80%" />
                <Stop stopColor="#FEFFFF" offset="100%" />
              </LinearGradient>
            </Defs>
            <Path d={line} fill="transparent" stroke="#367be2" strokeWidth={5} />
            <Path d={`${line} L ${width} ${height} L 0 ${height}`} fill="url(#gradient)" />
            <View ref={this.cursor} style={styles.cursor} />
          </Svg>
          <Animated.View style={[styles.label, { transform: [{ translateX }] }]}>
            <TextInput ref={this.label} />
          </Animated.View>
          <Animated.ScrollView
            style={StyleSheet.absoluteFill}
            contentContainerStyle={{ width: lineLength * 2 }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            bounces={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x },
                  },
                },
              ],
              { useNativeDriver: true },
            )}
            horizontal
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginTop: 60,
    height,
    width,
  },
  cursor: {
    width: cursorRadius * 2,
    height: cursorRadius * 2,
    borderRadius: cursorRadius,
    borderColor: '#367be2',
    borderWidth: 3,
    backgroundColor: 'white',
  },
  label: {
    position: 'absolute',
    top: -45,
    left: 0,
    backgroundColor: 'lightgray',
    width: labelWidth,
  },
});
