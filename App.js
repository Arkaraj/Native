import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar as SB } from 'react-native';

export default function App() {
  // Development

  return (
    <>

      <View style={styles.container}>

        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }} />
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          alignSelf: "flex-start"
        }} />
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }} />

      </View>

      <StatusBar style="auto" />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // horizontal
    justifyContent: "center", // main
    alignItems: "center", // secondary
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? SB.currentHeight : 0
  },
});
