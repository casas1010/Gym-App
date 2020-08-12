import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import BackGround from "./components/BackGround";
import WelcomScreen from "./screens/WelcomScreen";
import AuthScreen from "./screens/AuthScreen";
import ExerciseListScreen from "./screens/ExerciseListScreen";
import LogsScreen from "./screens/LogsScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ExerciseDetailsScreen from "./screens/ExerciseDetailsScreen";
import PickedExercisesScreen from "./screens/PickedExercisesScreen";
import CreateNewWorkoutMenuScreen from "./screens/CreateNewWorkoutMenuScreen.js";

const MainNavigator = createBottomTabNavigator(
  {
    // welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: createBottomTabNavigator({
        map: { screen: LogsScreen },
        deck: { screen: LogsScreen },
        WORKOUT: {
          screen: createStackNavigator({
            WORKOUT: { screen: PickedExercisesScreen },
            CreateNewWorkoutMenuScreen: { screen: CreateNewWorkoutMenuScreen },
            search: { screen: SearchScreen },
            details: { screen: ExerciseDetailsScreen },
          }),
        },
      }),
    },
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false,
    },
    navigationOptions: {
      lazy: true,
    },
  }
);

const App = createAppContainer(MainNavigator);
import { Provider } from "react-redux";
import store from "./store";
import { setNavigator } from "./navigationRef";

export default () => {
  return (
    <Provider store={store}>
      <BackGround>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </BackGround>
    </Provider>
  );
};
