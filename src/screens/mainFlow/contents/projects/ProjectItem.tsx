import {
  GithubIcon,
  PROJECT_NAME_ICON_MAP,
  Redirect,
  StarIcon,
  StarTrekIcon,
} from '@assets';
import {
  HStack,
  VStack,
  Img,
  Heading,
  IconButton,
  Text,
  Link,
  Wrap,
} from '@chakra-ui/react';
import { useCursor, AnimatedModal, Chip, CardSpotlight } from '@components';
import { ProjectItemType } from '@data';
import { Carousel } from 'react-responsive-carousel';

const CustomIconButton = ({
  type = 'github',
  link,
}: {
  type?: 'github' | 'web';
  link: string;
}) => {
  return (
    <IconButton
      variant="outline"
      aria-label={type}
      color={'white'}
      width={10}
      icon={
        type === 'github' ? (
          <GithubIcon width={'2em'} />
        ) : (
          <Redirect width={'2em'} />
        )
      }
      _hover={{ color: 'white' }}
      as={Link}
      href={link}
      isExternal
    />
  );
};

const ProjectItem = ({
  title,
  icon,
  description,
  keyPoints,
  image,
  githubLink,
  link,
  tags,
  demoVideo,
}: ProjectItemType) => {
  const { setCursorInsets } = useCursor();

  const onMouseEnter = () => {
    setCursorInsets({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      borderRadius: '0.5rem',
    });
  };

  const onMouseLeave = () => {
    setCursorInsets(undefined);
  };

  return (
    <HStack width={'100%'} px={32} zIndex={10}>
      <VStack width={'40%'} justifyContent={'center'}>
        <Carousel
          axis="horizontal"
          dynamicHeight
          showStatus={false}
          emulateTouch
          autoPlay
          infiniteLoop
          interval={3000}
          showArrows={false}
          showIndicators={false}
          stopOnHover
          width={'100%'}
        >
          {image.map((img) => (
            <Img key={img} src={img} alt={title} loading="lazy" />
          ))}
        </Carousel>
      </VStack>
      <CardSpotlight
        style={{
          width: '55%',
        }}
      >
        <VStack
          width={'100%'}
          height={'55vh'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <HStack justifyContent={'space-between'} width={'full'}>
            <HStack>
              <Heading size="lg">{title}</Heading>
              {PROJECT_NAME_ICON_MAP[icon]}
            </HStack>
            <HStack spacing={5}>
              <AnimatedModal
                triggerText={'Demo'}
                title={title}
                videoUrl={demoVideo}
                websiteUrl={link}
              />
              <CustomIconButton type="web" link={link} />
              <CustomIconButton link={githubLink} />
            </HStack>
          </HStack>
          <HStack justify={'flex-start'}>
            <StarTrekIcon width={56} height={56} />
            <Text>{description}</Text>
          </HStack>
          <VStack alignItems={'flex-start'} width={'100%'}>
            {keyPoints.map((point) => (
              <HStack key={point} justify={'flex-start'} paddingStart={3}>
                <StarIcon />
                <Text key={point}>{point}</Text>
              </HStack>
            ))}
          </VStack>
          <Wrap>
            {tags.map((tag) => (
              <Chip key={tag} type={tag} />
            ))}
          </Wrap>
        </VStack>
      </CardSpotlight>
    </HStack>
  );
};

export default ProjectItem;
