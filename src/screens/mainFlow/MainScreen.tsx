import { TitleBoxContainer } from '@components';
import { Footer, NavigationBar } from './components';
import { Contents } from './contents';
import { CoverContent } from './CoverContent';

const MainScreen = () => {
  return (
    <TitleBoxContainer
      title={'Amit Raikwar | Portfolio'}
      bg={'black'}
      minW={'99vw'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
    >
      <NavigationBar />
      <CoverContent />
      <Contents />
      <Footer />
    </TitleBoxContainer>
  );
};

export default MainScreen;
