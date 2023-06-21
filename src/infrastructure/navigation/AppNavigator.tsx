import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DefaultScreenOptions, RootStackParamList } from '..';
import { HomeScreen } from '../../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={DefaultScreenOptions}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
