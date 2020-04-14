import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function AppBackground(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/CROP_Cardboard_06-min.jpg")}
        style={styles.image}
      >
        {props.children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    // paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    width: "100%",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
