import { Box, Text } from '@chakra-ui/react';
import { HoverBorderGradient } from '@components';
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
      display={'absolute'}
      flexDirection={'column'}
      width={'100%'}
      height={'220px'}
      overflowY={'hidden'}
      p={2}
      bg={'black'}
      color={'white'}
    >
      <HoverBorderGradient>
        <FooterEndText />
      </HoverBorderGradient>
    </Box>
  );
};

export default Footer;
