import { Home, Login, Registration } from './type';

export { default as AuthStack } from './stack/AuthStack';
export { default as ProtectedStack } from './stack/ProtectedStack';
export type RootStackParamList = {
  Home: Home;
  Login: Login;
  Registration: Registration;
};
