import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import Todo from "./Todo";
//Key toevoegen!! met een package die heet: uuidv4 -->Verder op studeren ook film op ong: 1:56:00. ->Hier package toevoegen


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
            {todos.map(todo => (
                <Todo key={} title={todo}/> //hier komt de key ingevoegd!!!
            ))}

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
