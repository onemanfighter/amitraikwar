import { Box, HStack, Text } from '@chakra-ui/react';
import { Card, CoverText, ThreeDPin, WavyBackground } from '@components';
import HeroText from './HeroText';
import { zIndices } from 'src/components/Theme/fonts';
import AboutMe from './AboutMe';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';

const Contents = () => {
  return (
    <Box
      marginTop={10}
      display={'flex'}
      bottom={0}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      bg={'black'}
      paddingX={20}
      color={'white'}
    >
      <CoverText
        text="Hello, I am "
        highlightedText="Amit Raikwar"
        role="Full Stack Developer"
      />
      <AboutMe />
      <Work />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Contents;
