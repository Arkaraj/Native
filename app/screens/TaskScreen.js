import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Task from "../components/Tasks";
import colours from "../config/colours";

function TaskScreen(props) {
  return (
    <View style={style.tasksWrapper}>
      {/* Today's task */}
      <Text style={style.sectionTitle}>Today's task</Text>

      <View style={style.items}>
        {/* This is where the tasks will go! */}
        <Task text={"Task 1"} />
        <Task text={"Task 2"} />
        <Task text={"Task 3"} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});

export default TaskScreen;
