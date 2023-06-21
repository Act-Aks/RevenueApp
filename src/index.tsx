import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { Navigator } from './infrastructure/navigation';
import theme from './infrastructure/theme';
import { AuthenticationProvider } from './services/auth/authContext';

function RevenueApp() {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <Navigator />
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

export default RevenueApp;
