import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  IconButton,
  Img,
  Text,
  Tr,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { TypeWriterText } from '@components';
import { CardProps } from './types';
import { useTranslation } from 'react-i18next';
import SocialButtons from './SocialButtons';
import { BirthdayIcon, EmailIcon, LocationIcon, PhoneIcon } from '@assets';

const Icons = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'birthday':
      return <BirthdayIcon />;
    case 'email':
      return <EmailIcon />;
    case 'phone':
      return <PhoneIcon />;
    case 'location':
      return <LocationIcon />;
    default:
      return <></>;
  }
};

const Card = ({ title, heading, icon }: CardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      padding={'4'}
      borderRadius={'lg'}
      borderBottom={'1px solid gray'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'flex-start'}
      bg={colorMode === 'light' ? 'green.200' : 'green.700'}
    >
      <IconButton
        variant={'outline'}
        bg={'white'}
        color={colorMode === 'light' ? 'green.400' : 'green.700'}
        aria-label={title}
        icon={<Icons icon={icon} />}
      />
      <Box display={'flex'} flexDirection={'column'} paddingX={2}>
        <Text fontSize={'sm'}>{heading}</Text>
        <Text fontSize={'md'} fontWeight={'600'}>
          {title}
        </Text>
      </Box>
    </Box>
  );
};

const Content = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  return (
    <Box
      flex={1}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      borderRadius={'lg'}
      bgGradient={
        colorMode === 'light'
          ? 'linear(to-br, green.300, blue.500)'
          : 'linear(to-br, green.800, blue.900)'
      }
      marginX={'4'}
      marginTop={'40'}
      dropShadow={'lg'}
    >
      <Box
        boxSize={'250'}
        bg={colorMode === 'light' ? 'green.200' : 'green.700'}
        position={'relative'}
        top={'-125'}
        marginX={'auto'}
        borderRadius={'10'}
        boxShadow={'lg'}
      >
        <Img src={''} loading="lazy" borderRadius={10} padding={4} />
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        padding={'4'}
        borderRadius={'lg'}
        bg={colorMode === 'light' ? 'green.200' : 'green.700'}
        boxShadow={'lg'}
        margin={'4'}
        position={'relative'}
        top={'-90'}
      >
        <TypeWriterText
          fixedText="I'm a "
          textSequence={[
            {
              text: 'Software engineer!',
              wait: 1000,
            },
            { text: 'Full-stack developer!', wait: 2000 },
            { text: 'Web developer!', wait: 2000 },
            { text: 'Mobile developer!', wait: 2000 },
          ]}
          styles={{
            fontSize: '1.3em',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            textAlign: 'center',
          }}
        />
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        padding={'4'}
        gap={'4'}
        borderRadius={'lg'}
        bg={colorMode === 'light' ? 'green.200' : 'green.700'}
        boxShadow={'xl'}
        margin={'4'}
        position={'relative'}
        top={'-90'}
      >
        <Card
          title={t('MainHomeScreen.sidebar.details.phone')}
          heading={t('MainHomeScreen.sidebar.details.phoneHeader')}
          icon={'phone'}
        />
        <Card
          title={t('MainHomeScreen.sidebar.details.email')}
          heading={t('MainHomeScreen.sidebar.details.emailHeader')}
          icon={'email'}
        />
        <Card
          title={t('MainHomeScreen.sidebar.details.location')}
          heading={t('MainHomeScreen.sidebar.details.locationHeader')}
          icon={'location'}
        />
        <Card
          title={t('MainHomeScreen.sidebar.details.birthday')}
          heading={t('MainHomeScreen.sidebar.details.birthdayHeader')}
          icon={'birthday'}
        />
      </Box>
      <Box
        display={'flex'}
        borderRadius={'lg'}
        boxShadow={'lg'}
        marginX={'4'}
        padding={'2'}
        justifyContent={'center'}
        bg={colorMode === 'light' ? 'green.200' : 'green.700'}
      >
        <Text fontSize={'lg'} fontWeight={'bold'}>
          {t('MainHomeScreen.sidebar.post')}
        </Text>
      </Box>
      <Box position="relative" padding="10" top={-5}>
        <Divider />
        <AbsoluteCenter
          bgColor={colorMode === 'light' ? 'green.200' : 'green.700'}
          borderRadius={'lg'}
          px={4}
        >
          Social links
        </AbsoluteCenter>
      </Box>
      <SocialButtons />
    </Box>
  );
};

export default Content;
