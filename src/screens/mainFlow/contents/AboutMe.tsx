import { Box } from '@chakra-ui/react';
import HeroText from './HeroText';
import { useCursor, WavyBackground } from '@components';
import { useIsIntersecting } from '@hooks';
import { useEffect, useRef } from 'react';

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIsIntersecting(containerRef);
  const { setCursorType } = useCursor();

  useEffect(() => {
    if (isIntersecting) {
      setCursorType('splash');
    } else {
      setCursorType('follow');
    }
  }, [isIntersecting, setCursorType]);

  return (
    <Box ref={containerRef} minH={'100vh'} width={'100vw'} id="about">
      <WavyBackground>
        <HeroText />
      </WavyBackground>
      <Box paddingX="10">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          purus auctor, ultricies dui vel, ultricies nunc. Sed scelerisque, nunc
          nec volutpat auctor, libero
        </p>
      </Box>
    </Box>
  );
};

export default AboutMe;
