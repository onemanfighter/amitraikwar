import {
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AnimatedModal, Card, ThreeDPin, WavyBackground } from '@components';
import { useTranslation } from 'react-i18next';
import { ProjectItemType, ProjectsData } from '@data';
import { GithubIcon } from '@assets';
import { useScroll } from 'framer-motion';

const HeroText = () => {
  const { t } = useTranslation();

  return (
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
    <HStack width={'100%'} px={32} border={'1px solid white'}>
      <ThreeDPin title={title} href={link}>
        <Card centerText="Hourcoding" titleText={title} chips={tags} />
      </ThreeDPin>
      <VStack justifyContent={'flex-start'}>
        <HStack py={10}>
          <Heading size="lg">{title}</Heading>
          <IconButton
            variant="outline"
            aria-label="Github"
            color={'white'}
            width={10}
            icon={<GithubIcon width={'2em'} />}
            _hover={{ color: 'white' }}
            as="a"
            href={githubLink}
          />
        </HStack>
        <Text>{description}</Text>
        <AnimatedModal
          triggerText={'Demo'}
          title={title}
          videoUrl={demoVideo}
          websiteUrl={link}
        />
      </VStack>
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
      <ProjectItem {...ProjectsData[0]} />
    </Box>
  );
};

export default Projects;
