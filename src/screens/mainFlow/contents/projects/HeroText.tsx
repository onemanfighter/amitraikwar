import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const HeroText = () => {
  const { t } = useTranslation();

  return (
    <Box
      zIndex={100}
      position={'sticky'}
      top={'8vh'}
      overflowX={'hidden'}
      fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
    >
      <Text className=" text-white font-bold inter-var text-center">
        {t('about.quoteHeading')}
      </Text>
      <Text
        className="text-base md:text-lg text-white font-normal inter-var text-center"
        marginTop={{ base: 2 }}
      >
        {t('about.quoteSubheading')}
      </Text>
    </Box>
  );
};

export default HeroText;
