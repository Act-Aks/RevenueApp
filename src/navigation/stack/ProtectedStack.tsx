import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens';
import { RootStackParamList } from '..';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ProtectedStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default ProtectedStack;
