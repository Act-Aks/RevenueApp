import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DefaultScreenOptions, RootStackParamList } from '..';
import { LoginScreen, RegistrationScreen } from '../../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={DefaultScreenOptions}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
