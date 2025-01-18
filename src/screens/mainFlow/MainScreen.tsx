import { Text } from '@chakra-ui/react';
import { TitleBoxContainer, Lights } from '@components';
import { Footer, NavigationBar, SocialNavigation } from './components';
import { RobotScene } from './scene';
import { useState } from 'react';
import { Contents } from './contents';

const MainScreen = () => {
  const [characterType, setCharacterType] = useState<'adam' | 'lieutenant'>(
    'lieutenant',
  );
  return (
    <TitleBoxContainer
      title={'Amit Raikwar | Portfolio'}
      bg={'black'}
      minHeight={'100vh'}
      minW={'99vw'}
      display={'flex'}
      flexDir={'column'}
    >
      {/* <RobotScene type={characterType} /> */}
      <Lights />
      <NavigationBar
        handleCharacterClick={(type: 'adam' | 'lieutenant') => {
          setCharacterType(type);
        }}
      />
      <SocialNavigation />
      <Contents />
      <Footer />
    </TitleBoxContainer>
  );
};

export default MainScreen;
