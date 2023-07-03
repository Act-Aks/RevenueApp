import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { Account, DashBoard, Login, Registration, Tabs } from './type';

export type TabScreensParamList = {
  [Tab in Tabs]: undefined;
};

export const NavigationScreens = {
  Account: 'Account',
  DashBoard: 'DashBoard',
  Login: 'Login',
  Registration: 'Registration',
} as const;

export type RootStackParamList = {
  [NavigationScreens.Account]: Account;
  [NavigationScreens.DashBoard]: DashBoard;
  [NavigationScreens.Login]: Login;
  [NavigationScreens.Registration]: Registration;
} & TabScreensParamList;

export const DefaultScreenOptions: NativeStackNavigationOptions = {
  gestureEnabled: true,
  customAnimationOnGesture: true,
  animation: 'slide_from_right',
};
