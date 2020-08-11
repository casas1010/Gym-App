import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions/index";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import ListCard from '../components/ListCard'

// PULL ALLL IMAGES FROM HERE: https://www.britannica.com/science/human-muscle-system/The-abdomen

const SearchScreen = (props) => {

  // useEffect(() => {
  //   // console.log(props.exercises);
  //   // console.log('exercises.exercises',exercises.exercises)
  // }, []);
  const openCardDetails = (name) =>{
    console.log(`card ${name} has been clicked!`)
    props.navigation.navigate('DETAILS',{
      name:name
    })
  }

  return (
    <SafeAreaView>
      <SearchBar />
      <FlatList
        horizontal={false}
        style={styles.list}
        keyExtractor={(element) => element.exerciseName}
        data={props.exercises}
        renderItem={(element) => {
          console.log('element.item:  ',element.item.exerciseName);
          return (
              <ListCard
                  imageURL={element.item.anatomyPicture}
                  name={element.item.exerciseName}
                  callBack={openCardDetails}
              />        
             
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingLeft: 15,
    paddingTop: 20,
    paddingRight: 15,
  },
});

// export default SearchScreen;
function mapStateToProps({ auth, exercise }) {
  return { exercises: exercise.exercises };
}

export default connect(mapStateToProps, actions)(SearchScreen);
