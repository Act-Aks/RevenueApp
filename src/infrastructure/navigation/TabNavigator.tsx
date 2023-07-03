import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Icon, { Icons, IconType } from '../../components/Icon';
import { ExpensesProvider } from '../../services/expenses/expensesContext';
import colors from '../theme/colors';
import { Tabs as TabRoutes } from '../type';
import AccountStack from './stacks/AccountStack';
import DashBoardStack from './stacks/DashBoardStack';

type Tab = {
  route: TabRoutes;
  label: string;
  type: IconType;
  activeIcon: string;
  inActiveIcon: string;
  component: () => JSX.Element;
};

interface TabButtonProps extends BottomTabBarButtonProps {
  item: Tab;
}

const TabArray: Array<Tab> = [
  {
    route: 'DashBoardTab',
    label: 'Dashboard',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: DashBoardStack,
  },
  {
    route: 'AccountTab',
    label: 'Account',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    component: AccountStack,
  },
];

const Tabs = createBottomTabNavigator();

const TabButton = (props: TabButtonProps) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState?.selected;
  const tabTranslateY = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      tabTranslateY.value = withTiming(-10, {
        duration: 300,
        easing: Easing.linear,
      });
    } else {
      tabTranslateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.linear,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  const tabAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: tabTranslateY.value }],
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animated.View style={[focused && styles.tab, tabAnimatedStyle]}>
        <Animated.View style={[focused && styles.tabIcon]}>
          <Icon
            type={item.type}
            name={focused ? item.activeIcon : item.inActiveIcon}
            color={colors.light.primaryContainer}
          />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  return (
    <ExpensesProvider>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}>
        {TabArray.map((item, index) => {
          const tabBarButton = (props: BottomTabBarButtonProps) => (
            <TabButton {...props} item={item} />
          );

          return (
            <Tabs.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                headerTitle: item.label,
                tabBarShowLabel: false,
                tabBarButton,
              }}
            />
          );
        })}
      </Tabs.Navigator>
    </ExpensesProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light.onPrimaryContainer,
  },
  tabBarStyle: {
    height: 60,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    backgroundColor: colors.light.primaryContainer,
    borderRadius: 30,
  },
  tabIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    width: '90%',
    backgroundColor: colors.light.onPrimaryContainer,
    borderRadius: 30,
  },
});

export default TabNavigator;
