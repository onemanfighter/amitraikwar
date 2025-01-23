import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, VStack } from '@chakra-ui/react';
import { ProjectsData } from '@data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectItem from './ProjectItem';
import { WavyBackground } from '@components';
import HeroText from './HeroText';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const base = [400, 600, 1000, 1400];
  const project1Ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });
  const opacity1 = useTransform(scrollY, base, [0, 1, 1, 0]);
  const height1 = project1Ref.current?.clientHeight;
  const opacity2 = useTransform(
    scrollY,
    base.map((i) => i + (height1 ?? 550)),
    [0, 1, 1, 0],
  );

  const heroOpacity = useTransform(
    scrollY,
    base.map((i) => i + 550),
    [1, 1, 1, 0],
  );

  const project1 = ProjectsData[0];
  const project2 = ProjectsData[1];

  return (
    <VStack minH={'100vh'} width={'99vw'} id="projects" rowGap={20} ref={ref}>
      <HeroText opacity={heroOpacity} />
      <Box position={'sticky'} top={'15vh'} transform={'translateY(-120px)'}>
        <WavyBackground />
      </Box>
      <motion.div
        style={{
          opacity: opacity1,
          position: 'sticky',
          top: '25vh',
        }}
      >
        <ProjectItem {...project1} />
      </motion.div>
      <motion.div
        style={{
          opacity: opacity2,
          position: 'sticky',
          top: '25vh',
        }}
      >
        <ProjectItem {...project2} />
      </motion.div>
      );
    </VStack>
  );
};

export default Projects;
