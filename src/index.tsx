import React, { useEffect, useState } from 'react';
// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';
import { ActivityIndicator, useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './constants/theme';
import { AuthStack, ProtectedStack } from './navigation';
import { User } from 'firebase/auth';
import { FIREBASE_AUTH, onAuthStateChanged } from '../firebase/config';
import SplashScreen from 'react-native-splash-screen';

function RevenueApp() {
  const isDarkMode = useColorScheme() === 'dark';
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    if (!loading) {
      SplashScreen.hide();
    } else {
      SplashScreen.show();
      onAuthStateChanged(auth, user => {
        setUser(user);
        setLoading(false);
      });
    }
    return () => {
      setLoading(false);
    };
  }, [loading]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        {!user ? <AuthStack /> : <ProtectedStack />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default RevenueApp;
