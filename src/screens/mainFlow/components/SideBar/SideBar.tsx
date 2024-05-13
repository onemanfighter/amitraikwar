import { MoonIcon, SearchIcon, SunIcon } from '@assets';
import {
  Box,
  Button,
  HStack,
  IconButton,
  Text,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import TooltipButtons from './components/TooltipButtons';
import Content from './components/Content';
import HeaderText from './components/HeaderText';

const SideBar = () => {
  return (
    <Box position={'sticky'} top={'0'} marginBottom={8}>
      <HeaderText />
      <TooltipButtons />
      <Content />
    </Box>
  );
};

export default SideBar;
