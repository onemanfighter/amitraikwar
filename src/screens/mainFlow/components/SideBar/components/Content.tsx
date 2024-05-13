import { Box, useColorMode } from '@chakra-ui/react';
import { TypeWriterText } from '@components';

const Content = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={'lg'}
      minHeight={'100vh'}
      bgGradient={
        colorMode === 'light'
          ? 'linear(to-br, green.300, blue.500)'
          : 'linear(to-br, green.800, blue.900)'
      }
      padding={'4'}
      margin={'4'}
      boxShadow={'lg'}
    >
      <TypeWriterText
        fixedText=""
        textSequence={[
          { text: 'Mobile app developer!', wait: 1000 },
          {
            text: 'Web developer!',
            wait: 1000,
          },
        ]}
      />
    </Box>
  );
};

export default Content;
