import { Box, HStack } from '@chakra-ui/react';
import { AnimatedModal, Card, ThreeDPin, WavyBackground } from '@components';
import { useTranslation } from 'react-i18next';
import { ProjectItemType, ProjectsData } from '@data';

const HeroText = () => {
  const { t } = useTranslation();

  return (
    <Box
      style={{
        height: 'auto',
        zIndex: 100,
        marginTop: '8vh',
      }}
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        {t('about.quoteHeading')}
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        {t('about.quoteHeading')}
      </p>
    </Box>
  );
};

const ProjectItem = ({
  title,
  description,
  keyPoints,
  image,
  githubLink,
  link,
  tags,
  demoVideo,
}: ProjectItemType) => {
  return (
    <HStack height={'70vh'} width={'100%'} px={32}>
      <ThreeDPin title={title} href={link}>
        <Card centerText="Hourcoding" titleText={title} chips={tags} />
      </ThreeDPin>
      <AnimatedModal
        triggerText={'See demo'}
        title={title}
        videoUrl={demoVideo}
        websiteUrl={link}
      />
    </HStack>
  );
};

const Projects = () => {
  return (
    <Box minH={'100vh'} width={'100vw'} id="projects">
      <WavyBackground>
        <HeroText />
      </WavyBackground>
      <ProjectItem {...ProjectsData[0]} />
    </Box>
  );
};

export default Projects;
