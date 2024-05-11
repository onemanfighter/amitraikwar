import React from 'react';
import {
  AppRouterProvider,
  LocalizationProvider,
  ThemeProvider,
} from '@providers';

function App() {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <LocalizationProvider>
          <AppRouterProvider />
        </LocalizationProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
