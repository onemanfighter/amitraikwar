import { Box } from '@chakra-ui/react';

const Lights = () => {
  return (
    <>
      <Box
        position={'fixed'}
        top={0}
        right={0}
        boxShadow={'0 0 40px 10px violet, 0 0 100px 40px violet'}
      />
      <Box
        position={'fixed'}
        top={'30%'}
        left={-10}
        boxShadow={
          '0 0 40px 10px violet, 0 0 100px 20px violet, 0 0 140px 30px violet, 0 0 200px 40px violet, 0 0 300px 60px violet'
        }
      />
    </>
  );
};

export default Lights;
