import { SearchIcon, MoonIcon, SunIcon, ThreeDIcon, TwoDIcon } from '@assets';
import {
  Tooltip,
  IconButton,
  useColorMode,
  Box,
  Button,
} from '@chakra-ui/react';
import { modalSelector, useShallow } from '@selectors';
import { ModalIDs, ModalOpenState, appStore } from '@store';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TooltipButtons = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [threeDState, setThreeDState] = useState(false);
  const { openModal, closeModal } = appStore(useShallow(modalSelector));
  const { t } = useTranslation();

  const onSearchClick = () => {
    openModal({
      modalOpenState: ModalOpenState.OPEN,
      modalID: ModalIDs.SEARCH,
      onModalClose: closeModal,
    });
  };
  const onDownloadCVClick = () => {
    console.log('Download CV button clicked');
  };
  const on3DToggleClick = () => {
    setThreeDState(!threeDState);
    console.log('3D toggle button clicked');
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
      <Button colorScheme="green" marginEnd={8} onClick={onDownloadCVClick}>
        {t('MainHomeScreen.sidebar.downloadCV')}
      </Button>
      <Tooltip
        label={threeDState ? 'Click to make 2D' : 'Click to make 3D'}
        fontSize="xs"
      >
        <IconButton
          aria-label="3D toggle"
          icon={threeDState ? <ThreeDIcon /> : <TwoDIcon />}
          onClick={on3DToggleClick}
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
