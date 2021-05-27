import React from 'react';
import { SafeAreaView  } from 'react-native';
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={Homepage} />
                <Stack.Screen name="Login" component={LoginPage} options={{
                    title: 'Sign in or Sign Up'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;

