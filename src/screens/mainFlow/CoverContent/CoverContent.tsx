import { useState } from 'react';
import { CoverText, Lights, MeteorsEffect } from '@components';
import { CharacterType, RobotScene } from '../scene';
import { SocialNavigation } from '../components';
import { useTranslation } from 'react-i18next';
import { Box } from '@chakra-ui/react';

const CoverContent = () => {
  const { t } = useTranslation();
  const [characterType, setCharacterType] =
    useState<CharacterType>('copernicus');
  return (
    <Box minH={'100vh'}>
      <MeteorsEffect number={30} />
      {/* <RobotScene type={characterType} /> */}
      <CoverText
        text={t('coverText.greeting')}
        highlightedText={t('coverText.name')}
        role={t('coverText.role')}
      />
      <Lights />
      <SocialNavigation
        handleCharacterClick={(type) => {
          setCharacterType(type);
        }}
      />
    </Box>
  );
};

export default CoverContent;
