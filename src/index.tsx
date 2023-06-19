import { NavigationContainer } from '@react-navigation/native';
import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { FIREBASE_AUTH, onAuthStateChanged } from '../firebase/config';
import { themes } from './constants';
import { AuthStack, ProtectedStack } from './navigation';

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
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      <NavigationContainer>
        {!user ? <AuthStack /> : <ProtectedStack />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default RevenueApp;
