/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import BaseRoutes from './src/routes/BaseRoutes';

function App(): JSX.Element {
  return (
    <NavigationContainer theme={DarkTheme}>
      <BaseRoutes />
    </NavigationContainer>
  );
}

export default App;
