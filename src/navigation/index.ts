import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Home, Login, Registration } from './type';

export { default as AuthStack } from './stack/AuthStack';
export { default as ProtectedStack } from './stack/ProtectedStack';

export const NavigationScreens = {
  Home: 'Home',
  Login: 'Login',
  Registration: 'Registration',
} as const;
export type RootStackParamList = {
  [NavigationScreens.Home]: Home;
  [NavigationScreens.Login]: Login;
  [NavigationScreens.Registration]: Registration;
};

export const DefaultScreenOptions: NativeStackNavigationOptions = {
  gestureEnabled: true,
  customAnimationOnGesture: true,
  animation: 'slide_from_right',
};
