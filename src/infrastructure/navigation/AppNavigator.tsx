import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DefaultScreenOptions, RootStackParamList } from '..';
import { HomeScreen } from '../../screens';
import { ExpensesProvider } from '../../services/expenses/expensesContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <ExpensesProvider>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={DefaultScreenOptions}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </ExpensesProvider>
  );
};

export default AppNavigator;
