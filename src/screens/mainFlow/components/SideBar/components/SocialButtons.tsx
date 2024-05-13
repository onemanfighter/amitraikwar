import { Box, useColorMode } from '@chakra-ui/react';
import { SOCIAL_MEDIA } from './constants';
import { SocialIcon } from 'react-social-icons';

const SocialButtons = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      borderRadius={'lg'}
      boxShadow={'lg'}
      margin={'4'}
      padding={'2'}
      gap={3}
      top={-10}
      position={'relative'}
      bg={colorMode === 'light' ? 'green.200' : 'green.700'}
      flexDirection={'row'}
      display={'flex'}
      justifyContent={'center'}
    >
      {SOCIAL_MEDIA.map((social) => (
        <Box key={social.url} paddingX={1}>
          <SocialIcon key={social.url} url={social.url} target="blank" />
        </Box>
      ))}
    </Box>
  );
};

export default SocialButtons;
