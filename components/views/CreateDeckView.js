import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, Text, TextInput, Alert, Keyboard } from "react-native";
import MainButton from "../Button/CustomButton";
import AppBackground from "../appBackground/AppBackground";
import { createDeck } from "../../store/actions/actions";

const CreateDeckView = (props) => {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  const createAlert = () =>
    Alert.alert(
      "Ooops!",
      "Please enter a valid deck title",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );

  const handleSubmit = () => {
    if (inputValue && inputValue.trim() !== "") {
      const id = uuidv4();
      dispatch(createDeck(id, inputValue.trim()));
      setInputValue("");
      Keyboard.dismiss();
      // props.navigation.navigate("Deck", { id });
      props.navigation.replace("Deck", { id });
    } else {
      {
        createAlert();
      }
    }
  };
  return (
    <AppBackground>
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
    </AppBackground>
  );
};

const styles = StyleSheet.create({
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

export default CreateDeckView;
