import React, { Component, useEffect, useRef } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";

import { connect } from "react-redux";
import * as actions from "../actions";

const AuthScreen = (props) => {
  useEffect(() => {
    props.facebookLogin();
    console.log('AuthScreen useEffect')
    props.fetchExercises();
    onAuthComplete(props);
  }, []);

  // snippet of code should resemble componentWillReceiveProps
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    onAuthComplete(props);
  }, [props.token]);
  // snippet of code should resemble componentWillReceiveProps

  const onAuthComplete = (props) => {
    if (props.token) {
      props.navigation.navigate("WORKOUT");
    }
  };

  return (
    <View>
      <Text>Auth</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
