import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity,Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
// import { connect } from "react-redux";
// import * as actions from "../actions/index";

const MAX_LIM = 15;
const WIDTH = Dimensions.get("window").width*.95;


const ListCard = ({ imageURL, name, callBack }) => {
  return (
    
    <TouchableOpacity style={styles.itemContainer} onPress={ ()=> callBack(name)}>
      <Image style={styles.image} source={{ uri: imageURL }} alt={name} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    
    width:WIDTH,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginLeft: 7
    
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

export default ListCard;
// export default connect(null, actions)(ListCard);
