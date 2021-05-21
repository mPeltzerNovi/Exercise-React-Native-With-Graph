import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import Todo from "./Todo";
//Let erop dat je bij auto import niet steeds op die "react-native-web" uitkomt. Het moet uit de gewone "react-native"


//Key toevoegen!! met een package die heet: uuidv4 -->Verder op studeren ook film op ong: 1:56:00.


const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
      setTodos([input, ...todos]); //Add to what ever de previous inputs were.
      setInput('');
    }

    return (
        <SafeAreaView>
          <View >
            <Text style={styles.titleText} >
                Let's build a React Native App with graphs etc </Text>
          </View>
          <ScrollView>
              {todos.map(todo => (
                  <Todo title={todo}/> //hier moet je normalitair de key ingevoegd!!!
              ))}
          </ScrollView>
          <TextInput
            style={styles.todoInput}
            value={input}
            onChangeText={text => setInput(text)}
          />
          <Button onPress={addTodo} title='Add TODO'/>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    todoInput: {
      margin: 20,
      height: 40,
      borderColor: 'red',
      borderWidth: 1
    },
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
