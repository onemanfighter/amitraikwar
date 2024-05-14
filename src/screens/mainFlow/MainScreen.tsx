import { Box, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react';
import { TypeWriterText } from '@components';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { SideBar, NavigationBar } from './components';

const MainScreen = () => {
  const { t } = useTranslation();

  return (
    <Grid
      maxWidth={'8xl'}
      height={'100%'}
      minHeight={'100vh'}
      margin={'auto'}
      templateColumns="repeat(7, 1fr)"
    >
      <GridItem colSpan={2}>
        <SideBar />
      </GridItem>
      <GridItem colSpan={5} scrollBehavior={'auto'}>
        <NavigationBar />
        <Box
          borderRadius={'lg'}
          padding={'4'}
          margin={'4'}
          boxShadow={'lg'}
          minH="177vh"
        >
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default MainScreen;
