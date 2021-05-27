import React, { useState } from 'react';
import {View, Text, Button, TextInput, StyleSheet} from "react-native";
//Hij heeft steeds de neiging om dingen automatisch uit "react-native-web" te importeren. Moet "react-native" worden

//Nu alleen basic hardcoded login maken Als de input overeenkomt met wat er hardcoded staat dan werkt het.

//Styles toevoegen
const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    },
});

const LoginPage = ({ navigation }) => {
    //State toevoegen voor de "basic-authentication"
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        if(username === 'martin' && password === 'admin') {
            navigation.navigate('Home');

        }
    }


    return (
        <View>
            <Text>I am the Login page</Text>

            <TextInput
                style={styles.input}
                value={username}
                placeholder='Enter your username'
                onChangeText={text => setUsername(text)}
            />

            <TextInput
                style={styles.input}
                value={password}
                secureTextEntry={true}
                placeholder='Enter your password'
                onChangeText={text => setPassword(text)}
            />


            <Button title='Login' onPress={(login)} />
        </View>
    )
}

export default LoginPage;
