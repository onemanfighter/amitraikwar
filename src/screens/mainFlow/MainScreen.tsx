import { Text } from '@chakra-ui/react';
import { TitleBoxContainer, Lights } from '@components';
import { NavigationBar, SocialNavigation } from './components';
import { RobotScene } from './scene';
import { useState } from 'react';

const MainScreen = () => {
  const [characterType, setCharacterType] = useState<'adam' | 'lieutenant'>(
    'lieutenant',
  );
  return (
    <TitleBoxContainer
      title={'Amit Raikwar | Portfolio'}
      bg={'black'}
      minHeight={'100vh'}
      minW={'100vw'}
      display={'flex'}
    >
      <RobotScene type={characterType} />
      <Lights />
      <NavigationBar
        handleCharacterClick={(type: 'adam' | 'lieutenant') => {
          setCharacterType(type);
        }}
      />
      <SocialNavigation />
    </TitleBoxContainer>
  );
};

export default MainScreen;
