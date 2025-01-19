import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <VStack minH={'100vh'} id="contact" paddingTop={24}>
      <Box rowGap={10}>
        <Heading textAlign={'start'}>{t('about.title')}</Heading>
        <HStack>
          <Text>{t('about.aboutMe')}</Text>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Contact;
