import { Box, Text } from '@chakra-ui/react';
import { Card } from '@components';

const Contents = () => {
  return (
    <Box
      minH={'100vh'}
      display={'flex'}
      bottom={0}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      height={'100px'}
      bg={'black'}
      color={'white'}
    >
      <Card
        centerText="Hourcoding"
        titleText="Hourcoding.com"
        subtitleText="A blog about coding and programming"
        chipText="React, Next.js, TypeScript, Chakra UI"
      />
    </Box>
  );
};

export default Contents;
