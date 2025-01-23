import { Box } from '@chakra-ui/react';
import AboutMe from './AboutMe';
import Work from './Work';
import { Projects } from './projects';
import Contact from './Contact';
import { useTranslation } from 'react-i18next';

const Contents = () => {
  const { t } = useTranslation();
  return (
    <Box
      marginTop={10}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      bg={'black'}
      paddingX={32}
      color={'white'}
    >
      <Projects />
      <Work />
      <AboutMe />
      <Contact />
    </Box>
  );
};

export default Contents;
