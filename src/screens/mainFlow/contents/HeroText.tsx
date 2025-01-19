import { Box } from '@chakra-ui/react';

const HeroText = () => {
  return (
    <Box
      style={{
        height: 'auto',
        zIndex: 100,
      }}
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        The web is a canvas for creativity.
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Let your imagination run wild.
      </p>
    </Box>
  );
};

export default HeroText;
