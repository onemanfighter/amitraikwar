import { Box, Heading, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Box minH={'100vh'} id="contact" paddingTop={24} rowGap={10}>
      <Heading textAlign={'start'}>{t('contact.title')}</Heading>
      <HStack></HStack>
    </Box>
  );
};

export default Contact;
