import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
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
      onAuthStateChanged(auth, authUser => {
        setUser(authUser);
        setLoading(false);
      });
    }
    return () => {
      setLoading(false);
    };
  }, [loading, auth]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        {!user ? <AuthStack /> : <ProtectedStack />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default RevenueApp;
