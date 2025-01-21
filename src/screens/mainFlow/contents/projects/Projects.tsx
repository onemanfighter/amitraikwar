import { Box, VStack } from '@chakra-ui/react';
import { ProjectsData } from '@data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HeroText from './HeroText';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <VStack
      minH={'100vh'}
      width={'100vw'}
      id="projects"
      marginTop={2}
      rowGap={20}
    >
      <HeroText />
      {ProjectsData.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </VStack>
  );
};

export default Projects;
