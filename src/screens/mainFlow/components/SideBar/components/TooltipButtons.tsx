import { SearchIcon, MoonIcon, SunIcon } from '@assets';
import {
  Tooltip,
  IconButton,
  useColorMode,
  Box,
  Button,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const TooltipButtons = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();
  const onSearchClick = () => {
    console.log('Search clicked');
  };
  return (
    <Box
      margin={'4'}
      padding={'4'}
      gap={'2'}
      flexDirection={'row'}
      justifyContent={'flex-end'}
      alignContent={'center'}
      border={'1px solid gray'}
      borderRadius={'lg'}
    >
      <Button colorScheme="green" marginEnd={8}>
        {t('MainHomeScreen.sidebar.downloadCV')}
      </Button>
      <Tooltip label="Search anything related to me " fontSize="xs">
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          onClick={onSearchClick}
          margin={'2'}
        />
      </Tooltip>
      <Tooltip label="Search anything related to me " fontSize="xs">
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          onClick={onSearchClick}
          margin={'2'}
        />
      </Tooltip>
      <Tooltip label={`Click for ${colorMode} mode`} fontSize="xs">
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          margin={'2'}
        />
      </Tooltip>
    </Box>
  );
};

export default TooltipButtons;
