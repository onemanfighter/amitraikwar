import { Box, Img, Text } from '@chakra-ui/react';
import { TypeWriterText } from '@components';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={'space-between'}
        width={'100%'}
      >
        <Box marginY={5} display="flex" flexDirection="column">
          <Text
            fontSize="3xl"
            fontWeight="bold"
            bgGradient={'linear(to-b, green.500, blue.500)'}
            bgClip={'text'}
            fontFamily={'monospace'}
          >
            {t('HomeScreen.heyMessage')}
          </Text>

          <Text
            fontSize="6xl"
            fontWeight="bold"
            bgGradient={'linear(to-b, green.500, blue.500)'}
            bgClip={'text'}
            fontFamily={'monospace'}
          >
            {t('HomeScreen.name')}
          </Text>
          <TypeWriterText
            fixedText=""
            textSequence={[
              { text: t('HomeScreen.whatIdoText.text0'), wait: 2000 },
              { text: t('HomeScreen.whatIdoText.text1'), wait: 2000 },
              { text: t('HomeScreen.whatIdoText.text2'), wait: 2000 },
              { text: t('HomeScreen.whatIdoText.text3'), wait: 2000 },
              { text: t('HomeScreen.whatIdoText.text4'), wait: 2000 },
            ]}
            styles={{
              fontSize: '2em',
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'monospace',
              alignSelf: 'start',
            }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          flex={1}
        >
          <Img
            width={300}
            height={300}
            src={require('../../../assets/images/Illustration.png')}
            alt="Illustration"
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
