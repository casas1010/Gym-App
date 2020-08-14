// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   Button,
//   Dimensions,
// } from "react-native";
// import { connect } from "react-redux";
// import BackGround from "../components/BackGround";

// const SCREEN_WIDTH = Dimensions.get("window").width;
// const SCREEN_HEIGHT = Dimensions.get("window").height;

// const CONTAINER_WIDTH = SCREEN_WIDTH * 0.5;

// const ExerciseDetailsScreen = (props) => {
//   const {
//     anatomyPicture,
//     animation,
//     description,
//     equipmentPicture,
//     exerciseName,
//     primaryMuscle,
//     secondaryMuscle,
//   } = props.navigation.state.params;

//   const secondaryMusclesRender = () => {
//     return secondaryMuscle
//       .replace(/\s/g, "")
//       .split(",")
//       .map((item) => {
//         return (
//           <Text key={item} style={styles.muscleSubTitleText}>
//             {item}
//           </Text>
//         );
//       });
//   };

//   const equipmentImageRender = () => {
//     const numberOfImages = equipmentPicture.split(",").length;
//     const height= SCREEN_HEIGHT/5;
//     const width= SCREEN_WIDTH/ (numberOfImages+1)

//     return equipmentPicture
//       .replace(/\s/g, "")
//       .split(",")
//       .map((item) => {
//         // console.log("item: ", item);
//         // console.log("lenght: ", numberOfImages);
//         return (
//           <Image
//             key={item}
//             style={{
//               height: height,
//               width: width,
//               marginLeft: 10,
//               marginRight: 10,
//             }}
//             source={{ uri: item }}
//           />
//         );
//       });
//   };

//   return (
//     <BackGround>
//       <ScrollView>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}> {exerciseName}</Text>
//           <Text
//             style={styles.subTitle}
//           >{`${primaryMuscle}, ${secondaryMuscle}`}</Text>
//         </View>

//         <View style={styles.videoContiner}></View>
//         <View style={styles.equipmentImageContainer}>
//           {equipmentImageRender()}
//         </View>

//         <Text style={styles.description}>{description}</Text>

//         <View style={styles.muscleDescriptionContainer}>
//           <View style={styles.leftContainer}>
//             <Text style={styles.muscleTitleText}>Primary</Text>
//             <Text style={styles.muscleSubTitleText}>{primaryMuscle}</Text>
//           </View>

//           <View style={styles.rightContainer}>
//             <Text style={styles.muscleTitleText}>Secondary</Text>
//             <View
//               style={{
//                 flexDirection: "column",
//               }}
//             >
//               {secondaryMusclesRender()}
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </BackGround>
//   );
// };

// const styles = StyleSheet.create({
//   titleContainer: {
//     marginLeft: 25,
//     marginBottom: 25,
//   },
//   title: {
//     fontSize: 25,
//     color: "white",
//     marginBottom: 15,
//   },
//   subTitle: {
//     fontSize: 20,
//     color: "#b3b3b3",
//   },
//   videoContiner: {},
//   equipmentImageContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     width: SCREEN_WIDTH,
//     backgroundColor: "#000c23",
//   },
//   description: {
//     fontSize: 20,
//     color: "#bfbfbf",
//     marginLeft: 25,
//     marginBottom: 25,
//   },
//   muscleDescriptionContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   leftContainer: {
//     width: CONTAINER_WIDTH,
//   },

//   muscleTitleText: {
//     fontSize: 15,
//     color: "#b3b3b3",
//     textAlign: "center",
//   },
//   muscleSubTitleText: {
//     fontSize: 10,
//     color: "white",
//     textAlign: "center",
//   },

//   rightContainer: {
//     // backgroundColor: "blue",
//     // flexDirection:'column',
//     width: CONTAINER_WIDTH,
//   },

// });

// export default ExerciseDetailsScreen;

import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Button,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import BackGround from "../components/BackGround";
import YoutubePlayer from "react-native-youtube-iframe";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CONTAINER_WIDTH = SCREEN_WIDTH * 0.5;

const ExerciseDetailsScreen = (props) => {
  const {
    anatomyPicture,
    animation,
    description,
    equipmentPicture,
    exerciseName,
    primaryMuscle,
    secondaryMuscle,
  } = props.navigation.state.params;
  //
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  //
  const secondaryMusclesRender = () => {
    return secondaryMuscle
      .replace(/\s/g, "")
      .split(",")
      .map((item) => {
        return (
          <Text key={item} style={styles.muscleSubTitleText}>
            {item}
          </Text>
        );
      });
  };

  const equipmentImageRender = () => {
    const numberOfImages = equipmentPicture.split(",").length;
    const height = SCREEN_HEIGHT / 5;
    const width = SCREEN_WIDTH / (numberOfImages + 1);

    return equipmentPicture
      .replace(/\s/g, "")
      .split(",")
      .map((item) => {
        // console.log("item: ", item);
        // console.log("lenght: ", numberOfImages);
        return (
          <Image
            key={item}
            style={{
              height: height,
              width: width,
              marginLeft: 10,
              // paddingTop:10,
              marginRight: 10,
            }}
            source={{ uri: item }}
          />
        );
      });
  };

  return (
    <BackGround>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {exerciseName}</Text>
          <Text
            style={styles.subTitle}
          >{`${primaryMuscle}, ${secondaryMuscle}`}</Text>
        </View>
          <YoutubePlayer
            ref={playerRef}
            height={188}
            width={SCREEN_WIDTH}
            videoId={animation}
            play={playing}
            onChangeState={(event) => console.log(event)}
            onReady={() => console.log("ready")}
            onError={(e) => console.log(e)}
            onPlaybackQualityChange={(q) => console.log(q)}
            volume={10}
            playbackRate={1}
            playerParams={{
              cc_lang_pref: "us",
              showClosedCaptions: true,
            }}
          />
        
        <View style={styles.equipmentImageContainer}>
          {equipmentImageRender()}
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.muscleDescriptionContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.muscleTitleText}>Primary</Text>
            <Text style={styles.muscleSubTitleText}>{primaryMuscle}</Text>
          </View>

          <View style={styles.rightContainer}>
            <Text style={styles.muscleTitleText}>Secondary</Text>
            <View
              style={{
                flexDirection: "column",
              }}
            >
              {secondaryMusclesRender()}
            </View>
          </View>
        </View>
      </ScrollView>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: 25,
    marginBottom: 25,
  },
  title: {
    fontSize: 25,
    color: "white",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 20,
    color: "#b3b3b3",
    paddingLeft:4
  },
  videoContiner: {},
  equipmentImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    paddingTop: 5,
    paddingBottom:5,
    backgroundColor: "#000c23",
  },
  description: {
    fontSize: 20,
    color: "#bfbfbf",
    marginLeft: 25,
    marginBottom: 25,
  },
  muscleDescriptionContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  leftContainer: {
    width: CONTAINER_WIDTH,
  },

  muscleTitleText: {
    fontSize: 15,
    color: "#b3b3b3",
    textAlign: "center",
  },
  muscleSubTitleText: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
  },

  rightContainer: {
    // backgroundColor: "blue",
    // flexDirection:'column',
    width: CONTAINER_WIDTH,
  },
});

export default ExerciseDetailsScreen;
