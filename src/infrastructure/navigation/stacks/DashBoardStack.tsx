import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DefaultScreenOptions, RootStackParamList } from '../..';
import { DashBoard } from '../../../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const DashBoardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'DashBoard'}
      screenOptions={DefaultScreenOptions}>
      <Stack.Screen name={'DashBoard'} component={DashBoard} />
    </Stack.Navigator>
  );
};

export default DashBoardStack;
