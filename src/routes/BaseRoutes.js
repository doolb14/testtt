import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DETAILS_SCREEN, HOME_SCREEN} from '../constants/screen_names';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const BaseRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={DETAILS_SCREEN} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default BaseRoutes;
