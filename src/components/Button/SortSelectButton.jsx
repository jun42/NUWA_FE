import React from 'react';
import { Button } from '@chakra-ui/react';

const SortSelectButton = ({ sortBy, setSortBy, text, type }) => {
  return (
    <Button
      borderRadius="8px"
      fontSize="14px"
      fontWeight="500"
      p="12px 26px"
      bgColor={sortBy === type ? '#575DFB' : '#FFFFFF'}
      color={sortBy === type ? 'white' : 'black'}
      _hover={sortBy === type ? { bgColor: '#575DFB' } : undefined}
      border={sortBy === type ? '1px solid #575DFB' : '1px solid #898989'}
      onClick={() => setSortBy(type)}
    >
      {text}
    </Button>
  );
};

export default SortSelectButton;
