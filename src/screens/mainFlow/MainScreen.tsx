import { Text } from '@chakra-ui/react';
import { FollowingCursor, TitleBoxContainer } from '@components';

const MainScreen = () => {
  return (
    <TitleBoxContainer
      title={'Amit Raikwar | Portfolio'}
      bg={'black'}
      minHeight={'100vh'}
      display={'flex'}
    >
      <FollowingCursor />
      <Text
        fontSize={'4xl'}
        color={'white'}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
      >
        AMIT Raikwar
      </Text>
    </TitleBoxContainer>
  );
};

export default MainScreen;
