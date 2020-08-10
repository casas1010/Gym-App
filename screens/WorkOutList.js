import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  
} from "react-native";
// import { Button } from "react-native-elements";
import axios from "axios";


const WorkOutList = () => {
  const [data, SetData] = useState()

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     "https://spreadsheets.google.com/feeds/cells/1kJiM6a-an4HvjnKFYnBXg-KpkCw_tUW36dGOEM59qhQ/1/public/values?alt=json"
  //   );
  //   setData({
  //     data: response.data.feed.entry,
  //     numberOfRows: response.data.feed.gs$rowCount,
  //     numberOfColumns: response.data.feed.gs$colCount,
  //   });
  //   console.log(response.data.feed)
  //   //
  //   //
  // };

  return (
    <View>
      <Text>hi</Text>
      {/* <FlatList
        style={styles.textStyle}
        horizontal={true}
        keyExtractor={(item) => item.name}
        data={data}
        renderItem={(element) => {
          return <Text>{element.item.name}</Text>;
        }}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({});

export default WorkOutList;
