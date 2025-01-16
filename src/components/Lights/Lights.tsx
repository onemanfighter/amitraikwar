import { Box } from '@chakra-ui/react';

const Lights = () => {
  return (
    <>
      <Box
        position={'absolute'}
        top={0}
        left={0}
        boxShadow={'0 0 40px 10px violet, 0 0 100px 40px violet'}
      />
      <Box
        position={'absolute'}
        top={'50%'}
        right={-10}
        boxShadow={
          '0 0 40px 10px violet, 0 0 100px 20px violet, 0 0 140px 30px violet, 0 0 200px 40px violet, 0 0 300px 60px violet'
        }
      />
    </>
  );
};

export default Lights;
