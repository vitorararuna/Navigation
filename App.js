import React from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';


export default function navegando() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
