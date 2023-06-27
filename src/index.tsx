import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { Navigator } from './infrastructure/navigation';
import theme from './infrastructure/theme';
import { AuthenticationProvider } from './services/auth/authContext';

function RevenueApp() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={theme.colors.light.background} />
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <Navigator />
        </AuthenticationProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default RevenueApp;
