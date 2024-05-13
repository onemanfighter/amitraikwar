import { Box } from '@chakra-ui/react';
import { SOCIAL_MEDIA } from './constants';
import { SocialIcon } from 'react-social-icons';

const SocialButtons = () => {
  return (
    <Box
      border={'1px solid gray'}
      borderRadius={'lg'}
      boxShadow={'lg'}
      padding={'2'}
    >
      {SOCIAL_MEDIA.map((social) => (
        <SocialIcon key={social.url} url={social.url} target="blank" />
      ))}
    </Box>
  );
};

export default SocialButtons;
