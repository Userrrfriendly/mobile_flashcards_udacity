import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [decks, setDecks] = React.useState([
    {
      name: "FirstDeck",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "decxxxk1",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "decxxxk12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "decxxxk13",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "decxxxk14",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "decxxxk15",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "decxxxk16",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "decxxxk17",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "dexxxck18",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "dexxxck19",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "dexxxck10",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "abdexxxck111",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
      ],
    },
    {
      name: "dxxxeck112",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "adxxxeck0",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "adxxxeck1",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "adxxxaeck12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "daxxxeck13",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "dexxxack14",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "dexxxcak15",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "decakxxx16",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "daxxxeck17",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "daexxxck18",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "dea3ck10",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d1ecdk111x",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d2eck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d3eck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d4eck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d5eck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d6eck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d7eck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d8eck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d9eck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "d10eck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "1deck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "2deck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "3deck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "4deck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "5deck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "6deck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "7deck1a12",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      name: "manowar",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },

    {
      name: "LAST DECK of steel",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
        {
          question: "What color is the firetrack",
          answer: "RED",
        },
      ],
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.deck}>
            <Text style={styles.deckName}>{item.name} - </Text>
            <Text>{`${item.questions.length} cards`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  deck: {
    flexDirection: "row",
    // backgroundColor: "red",
    backgroundColor: "#f9fae6",
    borderColor: "#c5700b",
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 1.5,
    marginHorizontal: 10,
    alignItems: "center",
  },
  deckName: {
    fontSize: 25,
    paddingHorizontal: 5,
  },
});
