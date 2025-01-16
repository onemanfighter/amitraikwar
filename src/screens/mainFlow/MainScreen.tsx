import { Text } from '@chakra-ui/react';
import { TitleBoxContainer, Lights } from '@components';
import { NavigationBar, SocialNavigation } from './components';

const MainScreen = () => {
  return (
    <TitleBoxContainer
      title={'Amit Raikwar | Portfolio'}
      bg={'black'}
      minHeight={'100vh'}
      minW={'100vw'}
      display={'flex'}
    >
      <Lights />
      <NavigationBar />
      <SocialNavigation />
      <Text
        fontSize={'4xl'}
        color={'white'}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
      >
        AMIT Raikwar
      </Text>
    </TitleBoxContainer>
  );
};

export default MainScreen;
