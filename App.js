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

const MainNavigator = createBottomTabNavigator(
  {
    // LIST: { screen: SearchScreen }, //DELETE ME
    // welcome: { screen: WelcomScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: createBottomTabNavigator({
        WORKOUT: { screen: ExerciseListScreen },
        LIST: { screen: SearchScreen },
        LOGS: {
          screen: createBottomTabNavigator(
            {
              LOGS: { screen: LogsScreen },
              // INSERT HIDDEN MENUS BELOW
              DETAILS: { screen: ExerciseDetailsScreen },
            },
            {
              defaultNavigationOptions: {
                tabBarVisible: false,
              },
              navigationOptions: {
                lazy: true,
              },
            }
          ),
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
      {/* <App /> */}
      <BackGround
        elements={
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        }
      />
    </Provider>
  );
};
