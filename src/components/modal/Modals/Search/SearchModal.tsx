import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';
import { SearchIcon } from '@assets';
import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';
import { fuse } from '@providers';

const SearchModal = () => {
  const { colorMode } = useColorMode();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const searchResults = fuse.search(searchText);
    setSearchResults(searchResults);
  }, [searchText]);

  return (
    <Box padding={1} top={100} zIndex={1000}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          type="search"
          placeholder="Search anything related to me"
          variant={'ghost'}
          value={searchText}
          onChange={handleSearch}
        />
      </InputGroup>

      <Box
        maxHeight={400}
        overflowY="auto"
        border="1px"
        borderRadius={4}
        boxShadow="md"
      >
        {searchResults.map((result, index) => (
          <Box
            key={index}
            padding={2}
            _hover={{
              bgGradient:
                colorMode === 'light'
                  ? 'linear(to-r, green.200, blue.500)'
                  : 'linear(to-r, green.800, blue.900)',
              cursor: 'pointer',
            }}
            _active={{
              bgGradient:
                colorMode === 'light'
                  ? 'linear(to-r, green.200, blue.500)'
                  : 'linear(to-r, green.700, blue.800)',
            }}
            onClick={() => {
              console.log(result.item);
            }}
          >
            {result.item.title}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SearchModal;
