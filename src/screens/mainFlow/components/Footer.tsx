import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const FooterEndText = () => (
  <Text fontSize={'md'}>
    © {new Date().getFullYear()}{' '}
    <Link to={'/'} color="violet">
      Amit Raikwar
    </Link>{' '}
    | All rights reserved
  </Text>
);

const Footer = () => {
  return (
    <Box
      display={'flex'}
      bottom={0}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      p={2}
      bg={'black'}
      color={'white'}
    >
      <FooterEndText />
    </Box>
  );
};

export default Footer;
