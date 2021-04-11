import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from "react-native";
import Task from "../components/Tasks";
import colours from "../config/colours";

function TaskScreen(props) {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const handleAddTask = () => {
    Keyboard.dismiss();
    // console.log(text);
    setTasks((t) => [...t, text]);
    setText("");
  };

  const handleDeleteTask = (idx) => {
    const copyTasks = [...tasks];
    copyTasks.splice(idx, 1);
    setTasks(copyTasks);
  };

  return (
    <View style={style.tasksWrapper}>
      {/* Today's task */}
      <Text style={style.sectionTitle}>Today's task</Text>

      <View style={style.items}>
        {/* This is where the tasks will go! */}
        {tasks.map((task, idx) => (
          <TouchableOpacity key={idx} onPress={() => handleDeleteTask(idx)}>
            <Task text={task} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Write a Task */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.writeTaskWrapper}
      >
        <TextInput
          style={style.input}
          placeholder={"Write a Task"}
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={style.addWrapper}>
            <Text style={style.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    position: "absolute",
    top: Dimensions.get("window").height * 0.86,
    // bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colours.white,
    width: 250,
    height: 50,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: colours.white,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});

export default TaskScreen;
