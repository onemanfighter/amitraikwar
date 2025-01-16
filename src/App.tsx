import React from 'react';
import {
  AppRouterProvider,
  LocalizationProvider,
  ThemeProvider,
} from '@providers';
import { HelmetProvider } from 'react-helmet-async';
import { CursorProvider } from '@components';

function App() {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <HelmetProvider>
          <CursorProvider>
            <LocalizationProvider>
              <AppRouterProvider />
            </LocalizationProvider>
          </CursorProvider>
        </HelmetProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
