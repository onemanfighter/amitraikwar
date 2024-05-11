import React from 'react';
import { useTranslation } from 'react-i18next';

import { LocalizationProvider, ThemeProvider } from '@providers';
import { TypeWriterText } from './components/TypeWriterText';

function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider>
      <React.StrictMode>
        <LocalizationProvider>
          <TypeWriterText
            fixedText={t('App')}
            textSequence={[
              { text: 'Web developer', wait: 1000 },
              { text: 'Mobile developer', wait: 1000 },
            ]}
          />
        </LocalizationProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
