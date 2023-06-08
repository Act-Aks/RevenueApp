import React from 'react';
import { View, Text } from 'react-native';
import { COLOR_THEMES } from '../../constants/theme';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_THEMES.backgroundColor,
      }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
