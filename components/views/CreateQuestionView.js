import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MainButton from "../Button/CustomButton";
import AppBackground from "../appBackground/AppBackground";

const CreateQuestion = (props) => {
  const [questionVal, setQuestionVal] = React.useState("");
  const [answerVal, setAnswerVal] = React.useState("");

  const createAlert = () =>
    Alert.alert(
      "Ooops!",
      "Please enter a valid question and answer",
      [
        {
          text: "OK",
          //  onPress: () => console.log("OK Pressed")
        },
      ],
      { cancelable: false }
    );

  const handleSubmit = () => {
    if (questionVal !== "" && answerVal !== "") {
      console.log(questionVal.trim());
      console.log(answerVal.trim());
      setQuestionVal("");
      setAnswerVal("");
      Keyboard.dismiss();
    } else {
      {
        createAlert();
      }
    }
  };

  return (
    <AppBackground>
      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.Os == "ios" ? "padding" : "height"}
      >
        <Text style={styles.title}>Create new question</Text>
        <TextInput
          placeholder="Enter Question"
          placeholderTextColor="lightgrey"
          multiline
          numberOfLines={2}
          style={styles.input}
          value={questionVal}
          onChangeText={(text) => setQuestionVal(text)}
        />
        <TextInput
          placeholder="Enter Answer"
          placeholderTextColor="lightgrey"
          multiline
          numberOfLines={2}
          style={styles.input}
          value={answerVal}
          onChangeText={(text) => setAnswerVal(text)}
        />
        <MainButton
          title="Submit"
          style={styles.btnSubmit}
          onPress={handleSubmit}
        />
      </KeyboardAvoidingView>
    </AppBackground>
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

export default CreateQuestion;
