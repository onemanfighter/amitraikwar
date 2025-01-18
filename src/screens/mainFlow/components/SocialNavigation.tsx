import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MediumIcon,
  RobotIcon,
  SunIcon,
} from '@assets';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useCursor } from '@components';
import { RefObject, useRef } from 'react';
import { CharacterType } from '../scene';

const IconProps = {
  variant: 'ghost',
  color: 'white',
  transition: 'transform 0.3s',
  transform: 'scale(1.5)',
  _hover: {
    transform: 'scale(2.2)',
  },
};

const SocialNavigation = ({
  handleCharacterClick: handlerCharacterClick,
}: {
  handleCharacterClick: (type: CharacterType) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const { setCursorInsets } = useCursor();
  const onMouseEnter =
    (ref: RefObject<HTMLDivElement>, radius: string) => () => {
      const { width, height, top, left } =
        ref.current?.getBoundingClientRect() || {
          width: 56,
          height: 56,
          top: 0,
          left: 0,
        };
      setCursorInsets(undefined);
      setTimeout(() => {
        setCursorInsets({ height, width, top, left, borderRadius: radius });
      }, 0);
    };
  const onMouseLeave = () => {
    setCursorInsets(undefined);
  };
  return (
    <VStack position={'fixed'} bottom={20} right={10} rowGap={10} zIndex={10}>
      <Box
        ref={menuButtonRef}
        onMouseEnter={onMouseEnter(menuButtonRef, '6px')}
        onMouseLeave={onMouseLeave}
      >
        <Menu isLazy placement="top-start" closeOnBlur closeOnSelect={true}>
          <MenuButton>
            <IconButton
              variant={'outline'}
              aria-label="Options"
              icon={<RobotIcon height={'2em'} width={'2em'} />}
            />
          </MenuButton>
          <MenuList
            style={{
              backgroundColor: 'transparent',
              color: 'violet',
              padding: '0px',
              boxShadow: '0px 0px 20px 8px violet',
            }}
          >
            {(['adam', 'lieutenant', 'copernicus'] as CharacterType[]).map(
              (character: CharacterType) => (
                <MenuItem
                  key={character}
                  onClick={() => handlerCharacterClick(character)}
                >
                  <Text fontSize={'xl'}>{character.toUpperCase()}</Text>
                </MenuItem>
              ),
            )}
          </MenuList>
        </Menu>
      </Box>
      <VStack
        ref={ref}
        px={2}
        py={5}
        border={'1px solid white'}
        borderRadius={'30px'}
        outline={'1px solid violet'}
        onMouseEnter={onMouseEnter(ref, '30px')}
        onMouseLeave={onMouseLeave}
      >
        <IconButton aria-label="" icon={<GithubIcon />} {...IconProps} />
        <IconButton icon={<LinkedInIcon />} aria-label="" {...IconProps} />
        <IconButton icon={<MediumIcon />} aria-label="" {...IconProps} />
        <IconButton icon={<InstagramIcon />} aria-label="" {...IconProps} />
      </VStack>
    </VStack>
  );
};

export default SocialNavigation;
