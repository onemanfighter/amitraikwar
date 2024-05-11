import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@providers';

function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider>
      <React.StrictMode>
        <div>{t('App')}</div>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
