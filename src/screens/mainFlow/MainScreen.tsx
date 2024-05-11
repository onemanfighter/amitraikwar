import { Box, Text } from '@chakra-ui/react';
import { TypeWriterText } from '@components';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

const MainScreen = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <TypeWriterText
        fixedText={t('App')}
        textSequence={[
          { text: 'Web developer', wait: 1000 },
          { text: 'Mobile developer', wait: 1000 },
        ]}
      />
      <Text>MainScreen</Text>
      <Outlet />
    </Box>
  );
};

export default MainScreen;
