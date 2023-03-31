import React from 'react';
import { View, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import RevenueApp from './src';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const style = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={style}>
      <RevenueApp />
    </View>
  );
}

export default App;
