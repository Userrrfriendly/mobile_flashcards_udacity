import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { CORAL, SOFT_BLACK } from "../../utils/colors";

const CustomButton = (props) => {
  // console.log(props.onPress);
  return (
    <TouchableOpacity
      activeOpacity={0.35}
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
    >
      <View>
        <Text style={{ ...styles.title, ...props.titleStyle }}>
          {props.title.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    alignContent: "center",
    justifyContent: "center",
    elevation: 5,
    backgroundColor: CORAL,
    height: 70,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: SOFT_BLACK,
  },
});

export default CustomButton;
