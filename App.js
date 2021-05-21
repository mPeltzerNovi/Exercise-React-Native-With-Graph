import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
        <SafeAreaView>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        </SafeAreaView>
    )
  }
}

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
