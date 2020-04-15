import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../components/views/DeckListView";
import DeckView from "../components/views/DeckView";
import QuizView from "../components/views/QuizView";
import CreateDeckView from "../components/views/CreateDeckView";
import CreateQuestionView from "../components/views/CreateQuestionView";

import { PERSIAN_ORANGE, SOFT_BLACK } from "../utils/colors";

const Stack = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: PERSIAN_ORANGE,
  },
  headerTitleStyle: {
    color: SOFT_BLACK,
  },
  headerBackTilteStyle: {
    //fontFamily:'open-sans'
  },
  headerTintColor: SOFT_BLACK, //the back arrow
};

export default function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={} custom options will go here
        />
        <Stack.Screen name="Deck" component={DeckView} />
        <Stack.Screen name="Quiz" component={QuizView} />
        <Stack.Screen name="Create Deck" component={CreateDeckView} />
        <Stack.Screen name="Create Question" component={CreateQuestionView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
