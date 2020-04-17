export const DECKS = [
  {
    id: "1",
    name: "React Native: Components, Styles and Layouts",
    questions: [
      {
        question:
          "What's one of the main roles of the built-in <View> component?",
        answer: "Structure/Group other child components",
      },
      {
        question:
          "Can you use HTML elements (e.g. <div>, <p>, <input>) in React Native apps?",
        answer: "NO!",
      },
      {
        question:
          "What's the relation between React Native component styling and CSS (Cascading Style Sheets) for the Web?",
        answer:
          "React Native styling is inspired by CSS (similar property names values etc)",
      },
      {
        question:
          "Will the following example work in React Native: 'background-color':'#ccc' ?",
        answer: "NO!",
      },
      {
        question:
          "Why would you use const styles = StyleSheet.create({}) instead of a regular JavaScript object (const styles = {})?",
        answer:
          "Using StyleSheets adds validation and potential performance improvements.",
      },
      {
        question: "What's Flexbox?",
        answer:
          "A set of styling properties that allows you to structure content (ie create layouts).",
      },
      {
        question:
          "What's the default styling/ layout behavior of a <View> component?",
        answer: "It uses Flexbox to organize its child components.",
      },
      {
        question:
          "If a <View> has flexDirection: 'column' (which is the default) - what does alignItems: 'flex-end' do in that case??",
        answer:
          "It positions all child elements at the end of the column - on the horizontal axis.",
      },
    ],
  },
  {
    id: "DOUGLAS",
    name: "Douglas Adams Quiz",
    questions: [
      {
        question:
          "What's the answer to the Ultimate Question of Life, the Universe, and Everything",
        answer: "42",
      },
    ],
  },

  {
    id: "react",

    name: "React",
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
    id: "emptydeck",
    name: "New Deck",
    questions: [],
  },

  {
    id: "MANOWAR",
    name: "Deck of many things",
    questions: [
      {
        question:
          "Stop! Who would cross the Bridge of Death must answer me these questions three, ere the other side he see.",
        answer: "Ask me the questions, bridgekeeper. I am not afraid.",
      },
      {
        question: "What... is your name?",
        answer: "Sir Galahad of Camelot",
      },
      {
        question: "What... is your quest?",
        answer: "To seek the Holy Grail.",
      },
      {
        question: " What... is your favorite color?",
        answer: "Blue. No, yel-- auuuuuuuugh!",
      },
      {
        question: "What... is the air-speed velocity of an unladen swallow?",
        answer: "What do you mean? An African or European swallow?",
      },
      {
        question: "How do know so much about swallows?",
        answer:
          "Well, you have to know these things when you're a king, you know.",
      },
      {
        question: "What color is the firetrack",
        answer: "RED",
      },
    ],
  },
];
