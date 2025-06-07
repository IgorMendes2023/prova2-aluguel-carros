import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
      <NavigationContainer>
        <AppNavigation/>
        <StatusBar style='auto'/>
      </NavigationContainer>
  );
}