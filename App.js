import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Todo from "./Todo";

const App = () => {
    return (
        <SafeAreaView>
          <View >
            <Text style={styles.titleText} >
                Let's build a React Native App with graphs etc </Text>
          </View>
          <Todo />
          <Todo />
          <Todo />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  titleText: {
    //backgroundColor: 'red',
    fontSize: 30,
    fontWeight: "bold",
  },
  red: {
    color: 'red',
  },
});

export default App;

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Check!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
