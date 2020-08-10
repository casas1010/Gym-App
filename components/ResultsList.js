import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultDetail";

const ResultsList = ({ title, results, navigation }) => {
  const [data, setData] = useState([]);
  const isInitialMount = useRef(true);

  // Array Structure: [
  // 0   "Exercise Name",
  // 1  "Primary Muscle",
  // 2  "Secondary Muscle",
  // 3  "Animation",
  // 4  "Equipment Picture",
  // 5  "Description",
  // 6  "Anatomy Picture",
  // ]

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setData(results);
      console.log('results:  ',results)
      console.log('data:  ',data)
    }
  }, [results]);

  

  if (!data.length) {
    return null;
  }

  return(
    <Text>hi</Text>

    // <Text>{data[0]}</Text>
  )

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>{title}</Text>
  //     <FlatList
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       data={data[0]}
  //       keyExtractor={(element) => element}
  //       renderItem={(element) => {
  //         console.log(element)
  //         return <Text>{element}</Text>;
  //       }}
  //       // renderItem={({ item }) => {
  //       //   return (
  //       //     <TouchableOpacity
  //       //       onPress={() =>
  //       //         navigation.navigate('ResultsShow', { id: item.id })
  //       //       }
  //       //     >
  //       //       <ResultsDetail result={item} />
  //       //     </TouchableOpacity>
  //       //   );
  //       // }}
  //     />
  //   </View>
  // );
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

export default withNavigation(ResultsList);





/*

STABLE


import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultDetail";

const ResultsList = ({ title, results, navigation }) => {
  const [data, setData] = useState([]);
  const isInitialMount = useRef(true);

  // Array Structure: [
  // 0   "Exercise Name",
  // 1  "Primary Muscle",
  // 2  "Secondary Muscle",
  // 3  "Animation",
  // 4  "Equipment Picture",
  // 5  "Description",
  // 6  "Anatomy Picture",
  // ]

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setData(results);
      console.log('results:  ',results)
      console.log('data:  ',data)
    }
  }, [results]);

  

  if (!data.length) {
    return null;
  }

  return(
    <Text>hi</Text>

    // <Text>{data[0]}</Text>
  )

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>{title}</Text>
  //     <FlatList
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       data={data[0]}
  //       keyExtractor={(element) => element}
  //       renderItem={(element) => {
  //         console.log(element)
  //         return <Text>{element}</Text>;
  //       }}
  //       // renderItem={({ item }) => {
  //       //   return (
  //       //     <TouchableOpacity
  //       //       onPress={() =>
  //       //         navigation.navigate('ResultsShow', { id: item.id })
  //       //       }
  //       //     >
  //       //       <ResultsDetail result={item} />
  //       //     </TouchableOpacity>
  //       //   );
  //       // }}
  //     />
  //   </View>
  // );
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

export default withNavigation(ResultsList);

*/