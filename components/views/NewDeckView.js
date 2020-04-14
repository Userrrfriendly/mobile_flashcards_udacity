import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Keyboard,
  // KeyboardAvoidingView,
  // Platform,
} from "react-native";
import MainButton from "../Button/CustomButton";

const NewDeckView = (props) => {
  const [inputValue, setInputValue] = React.useState("");

  const createAlert = () =>
    Alert.alert(
      "Ooops!",
      "Please enter a valid deck title",
      [
        {
          text: "OK",
          //  onPress: () => console.log("OK Pressed")
        },
      ],
      { cancelable: false }
    );

  const handleSubmit = () => {
    if (inputValue && inputValue !== "") {
      console.log(inputValue.trim());
      setInputValue("");
      Keyboard.dismiss();
    } else {
      {
        createAlert();
      }
    }
  };
  return (
    <View
      style={styles.root}
      // behavior={Platform.Os == "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Enter the deck's name</Text>

      <TextInput
        placeholder="Enter Deck Name"
        placeholderTextColor="black"
        multiline
        numberOfLines={2}
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <MainButton
        title="Submit"
        style={styles.btnSubmit}
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginTop: 20,
  },
  input: {
    height: 60,
    marginTop: 30,
    width: "90%",
    borderColor: "#1E555C",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  btnSubmit: {
    marginTop: 30,
    width: "90%",
  },
});

export default NewDeckView;
