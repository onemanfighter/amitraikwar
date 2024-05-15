import React from 'react';
import {
  AppRouterProvider,
  LocalizationProvider,
  ModalProvider,
  ThemeProvider,
} from '@providers';

function App() {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <ModalProvider>
          <LocalizationProvider>
            <AppRouterProvider />
          </LocalizationProvider>
        </ModalProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
