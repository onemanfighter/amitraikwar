import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizationProvider, ThemeProvider } from '@providers';

function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider>
      <React.StrictMode>
        <LocalizationProvider>
          <div>{t('App')}</div>
        </LocalizationProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
