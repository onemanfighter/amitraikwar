import { Box, HStack, Img, Kbd } from '@chakra-ui/react';
import { LinkButton, useCursor } from '@components';
import AmitRaikwarLogo from '@assets/images/AmitRaikwarLogo.png';
import { SearchIcon } from '@assets';
import { useRef } from 'react';

const NavigationLink = ['About', 'Work', 'Contact', 'Articles'];

const NavigationBar = () => {
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
      setCursorInsets({ height, width, top, left, borderRadius: '50%' });
    }, 0);
  };

  const onMouseLeave = () => {
    setCursorInsets(undefined);
  };
  return (
    <HStack
      position={'fixed'}
      marginY={8}
      w={'100%'}
      paddingRight={14}
      paddingLeft={32}
      zIndex={1000}
      justifyContent={'space-between'}
    >
      <Img
        src={AmitRaikwarLogo}
        alt={'logo'}
        w={8}
        h={6}
        _hover={{
          transform: 'scale(1.3)',
          transition: 'transform 0.5s',
          cursor: 'pointer',
        }}
      />
      <HStack>
        <HStack
          columnGap={3}
          border={'1px solid gray'}
          padding="2"
          borderRadius="100px"
          bg={'rgba(255, 255, 255, 0.1)'}
          backdropFilter={'blur(20px)'}
          transition={'background-color 0.3s'}
        >
          {NavigationLink.map((link) => (
            <LinkButton
              key={link}
              text={link}
              href={`#${link.toLowerCase()}`}
              fontSize={'lg'}
              animationOnHover
            />
          ))}

          <Box
            padding="0.2"
            borderRadius="100px"
            bg={'rgba(255, 255, 255, 0.1)'}
            backdropFilter={'blur(20px)'}
            transition={'background-color 0.3s'}
          >
            <LinkButton
              key={'Contact'}
              text={'Contact'}
              href={'#contact'}
              fontSize={'lg'}
            />
          </Box>
        </HStack>
        <HStack
          border={'1px solid gray'}
          padding="2.5"
          color={'white'}
          borderRadius="100px"
          bg={'rgba(255, 255, 255, 0.1)'}
          backdropFilter={'blur(20px)'}
          transition={'all 0.3s'}
          _hover={{
            transform: 'scale(1.1)',
            cursor: 'pointer',
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={ref}
          onClick={() => {}} // eslint-disable-line
        >
          <SearchIcon />
        </HStack>
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
