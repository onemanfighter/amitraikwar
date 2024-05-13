import { Box } from '@chakra-ui/react';
import TooltipButtons from './components/TooltipButtons';
import Content from './components/Content';
import HeaderText from './components/HeaderText';

const SideBar = () => {
  return (
    <Box
      position={'sticky'}
      top={'0'}
      marginBottom={8}
      display={'flex'}
      flexDirection={'column'}
    >
      <HeaderText />
      <TooltipButtons />
      <Content />
    </Box>
  );
};

export default SideBar;
