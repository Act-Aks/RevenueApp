import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import useAuthenticationContext from '../../services/auth/authContext';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

export const Navigator = () => {
  const { isAuthenticated, isLoading } = useAuthenticationContext();

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
