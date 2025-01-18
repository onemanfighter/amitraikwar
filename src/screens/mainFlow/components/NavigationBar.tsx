import { HStack } from '@chakra-ui/react';
import { LinkButton } from '@components';

const NavigationBar = () => {
  return (
    <HStack
      position={'fixed'}
      marginY={8}
      w={'100%'}
      px={10}
      justifyContent={'space-between'}
    >
      <LinkButton text={'amitraikwar.in'} href={'#'} fontSize={'xl'} />
      <HStack columnGap={6}>
        <LinkButton
          key={'about'}
          text={'About'}
          href={'#about'}
          fontSize={'xl'}
          animationOnHover
        />
        <LinkButton
          key={'work'}
          text={'Work'}
          href={'#work'}
          fontSize={'xl'}
          animationOnHover
        />
        <LinkButton
          key={'contact'}
          text={'Contact'}
          href={'#contact'}
          fontSize={'xl'}
          animationOnHover
        />
        <LinkButton
          key={'articles'}
          text={'Articles'}
          href={'#articles'}
          fontSize={'xl'}
          animationOnHover
        />
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
