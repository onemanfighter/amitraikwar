import { Box } from '@chakra-ui/react';
import { Cover } from './Cover';

const CoverText = ({
  text,
  highlightedText,
}: {
  text: string;
  highlightedText: string;
}) => {
  return (
    <Box position={'absolute'} left={56} top={'200px'}>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto  mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        {text} <br />
        <br /> <Cover>{highlightedText}</Cover>
      </h1>
    </Box>
  );
};

export default CoverText;
