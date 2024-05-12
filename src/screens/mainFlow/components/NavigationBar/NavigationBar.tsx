import { Box, Button, useColorMode } from '@chakra-ui/react';
import { NavigationBarProps } from './types';
import { NavigationButtons } from './constants';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavigationBar = (props: NavigationBarProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  const { colorMode } = useColorMode();

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      padding={'4'}
    >
      <Box
        display={'flex'}
        bgGradient={
          colorMode === 'light'
            ? 'linear(to-r, green.300, blue.500)'
            : 'linear(to-r, green.800, blue.900)'
        }
        padding={'6'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
        borderRadius={'lg'}
        boxShadow={'lg'}
        gap={4}
      >
        {NavigationButtons.map((button) => {
          const isCurrentPath = location.pathname === button.path;
          return (
            <Button
              key={button.labelKey}
              as={NavLink}
              to={button.path}
              padding={'6'}
              bg={isCurrentPath ? 'green.600' : 'white'}
              _hover={{
                bg: 'green.500',
                color: 'white',
                boxShadow: 'lg',
              }}
              color={isCurrentPath ? 'white' : 'black'}
              transition={'all 0.3s'}
              fontSize={'lg'}
              fontWeight={'600'}
            >
              {t(button.labelKey)}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default NavigationBar;
