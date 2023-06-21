import { NavigationContainer } from '@react-navigation/native';
import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { FIREBASE_AUTH, onAuthStateChanged } from '../firebase/config';
import { themes } from './constants';
import { Navigator } from './infrastructure/navigation';
import { AuthenticationProvider } from './services/auth/authContext';

function RevenueApp() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      <AuthenticationProvider>
        <Navigator />
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

export default RevenueApp;
