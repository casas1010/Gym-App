// import React, { useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// // import { withNavigation } from 'react-navigation';
// // import ResultsDetail from './ResultsDetail';

// const ResultsList = ({ title, results=[], navigation }) => {
//   const isInitialMount = useRef(true);

//   useEffect(() => {
//     if (isInitialMount.current) {
//       isInitialMount.current = false;
//     } else {
//       // console.log('results:  ',results.exerciseNames )
//     }
//   }, [results]);

//   if (!results.length) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <FlatList
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         data={results}
//         keyExtractor={(result) => result.exerciseName}
//         renderItem={(item) => {
//           console.log(item)
//           return <Text>{item.exerciseName}</Text>;
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 15,
//     marginBottom: 5,
//   },
//   container: {
//     marginBottom: 10,
//   },
// });

// export default ResultsList;

import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

{
  /* <TouchableOpacity
onPress={() =>
  navigation.navigate(ite)
}
>
</TouchableOpacity> */
}

const ResultsList = ({ results, navigation }) => {
  useEffect(() => {
    // console.log()
  });

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.exerciseName}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.exerciseName}</Text>
            </View>
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
