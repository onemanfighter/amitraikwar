import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <VStack minH={'100vh'} id="contact" paddingTop={24}>
      <Box rowGap={10} width={'full'}>
        <Heading textAlign={'start'}>{t('contact.title')}</Heading>
        <HStack></HStack>
      </Box>
    </VStack>
  );
};

export default Contact;
