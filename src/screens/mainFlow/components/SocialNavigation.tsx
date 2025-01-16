import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MediumIcon,
  SunIcon,
} from '@assets';
import { IconButton, transition, VStack } from '@chakra-ui/react';
import { useCursor } from '@components';
import { useRef } from 'react';

const IconProps = {
  variant: 'ghost',
  color: 'white',
  transition: 'transform 0.3s',
  transform: 'scale(1.5)',
  _hover: {
    transform: 'scale(2.2)',
  },
};

const SocialNavigation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setCursorInsets } = useCursor();
  const onMouseEnter = () => {
    const { width, height, top, left } =
      ref.current?.getBoundingClientRect() || {
        width: 56,
        height: 56,
        top: 0,
        left: 0,
      };
    setCursorInsets(undefined);
    setTimeout(() => {
      setCursorInsets({ height, width, top, left, borderRadius: '30px' });
    }, 0);
  };
  const onMouseLeave = () => {
    setCursorInsets(undefined);
  };
  return (
    <VStack
      ref={ref}
      position={'fixed'}
      bottom={20}
      left={10}
      px={2}
      py={5}
      border={'1px solid white'}
      borderRadius={'30px'}
      outline={'1px solid violet'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <IconButton aria-label="" icon={<GithubIcon />} {...IconProps} />
      <IconButton icon={<LinkedInIcon />} aria-label="" {...IconProps} />
      <IconButton icon={<MediumIcon />} aria-label="" {...IconProps} />
      <IconButton icon={<InstagramIcon />} aria-label="" {...IconProps} />
    </VStack>
  );
};

export default SocialNavigation;
