import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import useAuthenticationContext from '../../services/auth/authContext';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

export const Navigator = () => {
  const { isAuthenticated, isLoading } = useAuthenticationContext();

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
