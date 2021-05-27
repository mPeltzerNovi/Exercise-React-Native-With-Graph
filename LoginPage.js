import React from 'react';
import { View, Text, Button } from "react-native";
//Hij heeft steeds de neiging om dingen automatisch uit "react-native-web" te importeren. Moet "react-native" worden


const LoginPage = ({ navigation }) => {
    return (
        <View>
            <Text>I am the Login page</Text>
            <Button title='Go back' onPress={() => navigation.goBack()} />
        </View>
    )
}

export default LoginPage;
