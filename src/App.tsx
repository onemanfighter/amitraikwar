import React from 'react';
import {
  AppRouterProvider,
  LocalizationProvider,
  ThemeProvider,
} from '@providers';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <HelmetProvider>
          <LocalizationProvider>
            <AppRouterProvider />
          </LocalizationProvider>
        </HelmetProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
