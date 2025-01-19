import { Box, HStack } from '@chakra-ui/react';
import { Card, ThreeDPin } from '@components';

const Projects = () => {
  return (
    <Box zIndex={100} height={'100vh'} width={'100vw'} id="projects">
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        purus auctor, ultricies dui vel, ultricies nunc. Sed scelerisque, nunc
        nec volutpat auctor, libero
      </p>
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

export default Projects;
