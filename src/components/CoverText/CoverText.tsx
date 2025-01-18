import { Box, Heading } from '@chakra-ui/react';
import { Cover } from './Cover';

const CoverText = ({
  text,
  highlightedText,
  role,
}: {
  text: string;
  highlightedText: string;
  role: string;
}) => {
  return (
    <Box position={'absolute'} left={32} top={'200px'}>
      <Heading className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto  mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <h2 className="text-xl md:text-3xl lg:text-4xl pb-6">{text}</h2>
        <Cover>{highlightedText}</Cover>
        <h2 className="text-xl md:text-3xl lg:text-4xl pt-6">{role}</h2>
      </Heading>
    </Box>
  );
};

export default CoverText;
