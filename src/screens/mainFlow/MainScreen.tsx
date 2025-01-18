import { TitleBoxContainer, Lights, MeteorsEffect } from '@components';
import { Footer, NavigationBar, SocialNavigation } from './components';
import { CharacterType, RobotScene } from './scene';
import { useState } from 'react';
import { Contents } from './contents';

const MainScreen = () => {
  const [characterType, setCharacterType] =
    useState<CharacterType>('copernicus');
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
      <NavigationBar />
      <SocialNavigation
        handleCharacterClick={(type) => {
          setCharacterType(type);
        }}
      />
      <Contents />
      <Footer />
    </TitleBoxContainer>
  );
};

export default MainScreen;
