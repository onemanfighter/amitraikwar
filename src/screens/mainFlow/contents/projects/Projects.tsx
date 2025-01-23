import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, VStack } from '@chakra-ui/react';
import { ProjectsData } from '@data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectItem from './ProjectItem';
import { WavyBackground } from '@components';
import HeroText from './HeroText';
import { useRef } from 'react';

const Projects = () => {
  return (
    <VStack minH={'100vh'} width={'100vw'} id="projects" rowGap={20}>
      <HeroText />
      <Box position={'sticky'} top={'0'}>
        <WavyBackground />
      </Box>
      {ProjectsData.map((project) => (
        <motion.div
          style={{
            position: 'sticky',
            top: '25vh',
          }}
          key={project.title}
        >
          <ProjectItem {...project} />
        </motion.div>
      ))}
    </VStack>
  );
};

export default Projects;
