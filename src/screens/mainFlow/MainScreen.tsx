import { Text } from '@chakra-ui/react';
import { TitleBoxContainer, Lights, MeteorsEffect } from '@components';
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
      minW={'99vw'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      overflowX={'hidden'}
    >
      <MeteorsEffect number={30} />
      <RobotScene type={characterType} />
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
