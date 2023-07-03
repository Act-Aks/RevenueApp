import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DefaultScreenOptions, RootStackParamList } from '../..';
import { Account } from '../../../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Account'}
      screenOptions={DefaultScreenOptions}>
      <Stack.Screen name={'Account'} component={Account} />
    </Stack.Navigator>
  );
};

export default AccountStack;
