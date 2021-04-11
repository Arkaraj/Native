import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colours from "../config/colours";

function Tasks({ text }) {
  return (
    <View style={styles.taskCard}>
      <View style={styles.itemsLeft}>
        <View style={styles.square}></View>
        <Text style={styles.taskText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: colours.white,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: colours.primary,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  taskText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: colours.primary,
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Tasks;
