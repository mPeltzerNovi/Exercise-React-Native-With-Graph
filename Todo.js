import React from 'react';
import { StyleSheet, Text, View } from "react-native"; //Hier zat de fout. Ik had "react-native-web" geimporteerd

const Todo = ({ title }) => {
    return (
        <View>
            <Text>☑ {title}</Text>
        </View>
    )
}

export default Todo;

const styles = StyleSheet.create({})
