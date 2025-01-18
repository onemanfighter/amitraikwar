import { Box, HStack, Text } from '@chakra-ui/react';
import { Card, ThreeDPin, WavyBackground } from '@components';
import HeroText from './HeroText';
import { zIndices } from 'src/components/Theme/fonts';

const Contents = () => {
  return (
    <Box
      marginTop={10}
      minH={'100vh'}
      display={'flex'}
      bottom={0}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      height={'100px'}
      bg={'black'}
      color={'white'}
    >
      <WavyBackground
        style={{
          position: 'absolute',
          zIndices: -1,
        }}
      >
        <HeroText />
      </WavyBackground>
      <HStack>
        <Card
          centerText="Hourcoding"
          titleText="Hourcoding.com"
          subtitleText="A blog about coding and programming"
          chipText="React, Next.js, TypeScript, Chakra UI"
        />
        <ThreeDPin title="Hourcoding.com" href="https://hourcoding.com">
          <Card
            centerText="Hourcoding"
            titleText="Hourcoding.com"
            subtitleText="A blog about coding and programming"
            chipText="React, Next.js, TypeScript, Chakra UI"
          />
        </ThreeDPin>
      </HStack>
    </Box>
  );
};

export default Contents;
