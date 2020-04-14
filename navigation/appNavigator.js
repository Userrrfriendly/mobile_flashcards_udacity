import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../components/views/DeckListView";
import DeckView from "../components/views/DeckView";
import QuizView from "../components/views/QuizView";
import CreateDeckView from "../components/views/CreateDeckView";
import CreateQuestionView from "../components/views/CreateQuestionView";

const Stack = createStackNavigator();

export default function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Deck" component={DeckView} />
        <Stack.Screen name="Quiz" component={QuizView} />
        <Stack.Screen name="Create Deck" component={CreateDeckView} />
        <Stack.Screen name="Create Question" component={CreateQuestionView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
