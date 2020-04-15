import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  // Dimensions,
  TouchableOpacity,
} from "react-native";
import { DECKS } from "../../dummyData/data";
import AppBackground from "../appBackground/AppBackground";
import FAB from "react-native-fab";
import { Ionicons } from "@expo/vector-icons";
import { CORAL, SOFT_BLACK } from "../../utils/colors";

export default function DecklistView(props) {
  const [decks, setDecks] = React.useState(DECKS);

  const handleNavigate = () => {
    props.navigation.navigate("Deck");
  };

  const handleFab = () => {
    props.navigation.navigate("Create Deck");
  };

  return (
    <AppBackground>
      <View style={styles.container}>
        <FlatList
          // numColumns={2}
          // columnWrapperStyle={{ justifyContent: "center" }}
          data={decks}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={handleNavigate}
              style={styles.deckSingle}
            >
              <View>
                <Text style={styles.deckName}>{item.name}</Text>
                <View style={{ paddingVertical: 5 }}>
                  <Text
                    style={{ textAlign: "right" }}
                  >{`${item.questions.length} cards`}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <FAB
          buttonColor={CORAL}
          iconTextColor={SOFT_BLACK}
          onClickAction={handleFab}
          visible={true}
          iconTextComponent={
            <Ionicons name="md-add" size={32} color={SOFT_BLACK} />
          }
        />
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  // deckTwoColumn: {
  //   width: Dimensions.get("window").width * 0.45,
  //   minHeight: 70,
  //   backgroundColor: "white",
  //   borderRadius: 4,
  //   marginVertical: 10,
  //   marginHorizontal: 10,
  //   paddingHorizontal: 6,
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   elevation: 5,
  // },
  deckSingle: {
    width: "90%",
    minHeight: 70,
    backgroundColor: "white",
    borderRadius: 4,
    marginVertical: 10,
    paddingHorizontal: 6,
    // alignItems: "center",
    // justifyContent: "space-between",
    elevation: 5,
    alignSelf: "center",
  },
  deckName: {
    fontSize: 25,
    paddingHorizontal: 5,
    textAlign: "left",
    alignSelf: "flex-start",
  },
});
