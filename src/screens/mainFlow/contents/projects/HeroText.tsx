import { Box, Text } from '@chakra-ui/react';
import { WavyBackground } from '@components';
import { useTranslation } from 'react-i18next';

const HeroText = () => {
  const { t } = useTranslation();

  return (
    <WavyBackground>
      <Box
        style={{
          height: 'auto',
          zIndex: 100,
          marginTop: '14vh',
        }}
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
      >
        <Text className=" text-white font-bold inter-var text-center">
          {t('about.quoteHeading')}
        </Text>
        <Text
          className="text-base md:text-lg text-white font-normal inter-var text-center"
          marginTop={{ base: 2 }}
        >
          {t('about.quoteHeading')}
        </Text>
      </Box>
    </WavyBackground>
  );
};

export default HeroText;
