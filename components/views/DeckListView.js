import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { DECKS } from "../../dummyData/data";
import Card from "../card/card";

export default function App() {
  const [decks, setDecks] = React.useState(DECKS);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "center" }}
        data={decks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Card style={styles.deck}>
            <Text style={styles.deckName}>{item.name}</Text>
            <View style={{ paddingVertical: 5 }}>
              <Text>{`${item.questions.length} cards`}</Text>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  deck: {
    width: Dimensions.get("window").width * 0.45,
    minHeight: 70,
    backgroundColor: "#f9fae6",
    borderRadius: 4,
    borderWidth: 2,
    marginVertical: 5.5,
    marginHorizontal: 10,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  deckName: {
    fontSize: 25,
    paddingHorizontal: 5,
  },
});
