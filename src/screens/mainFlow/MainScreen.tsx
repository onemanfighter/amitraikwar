import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { SideBar, NavigationBar } from './components';

const MainScreen = () => {
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
      <GridItem colSpan={5} scrollBehavior={'auto'} marginTop={16}>
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
