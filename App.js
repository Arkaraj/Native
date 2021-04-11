import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar as SB } from "react-native";
import colours from "./app/config/colours";
import TaskScreen from "./app/screens/TaskScreen";

export default function App() {
  // Development

  return (
    <View style={styles.container}>
      <TaskScreen />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row", // horizontal
    // justifyContent: "center", // main
    // alignItems: "center", // secondary
    backgroundColor: colours.secondary,
    // flexWrap: 'wrap',
    // paddingTop: Platform.OS === "android" ? SB.currentHeight : 0,
  },
});
