import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ListScreen from '../screens/ListScreen';
import FormScreen from '../screens/FormScreen';
const Stack = createStackNavigator();

const AppNavigation = () => (
    <Stack.Navigator >
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen}/>
    <Stack.Screen name="Form" component={FormScreen}/>
    <Stack.Screen name="List" component={ListScreen}/>
    </Stack.Navigator>
);

export default AppNavigation;