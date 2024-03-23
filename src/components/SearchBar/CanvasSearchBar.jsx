import React from 'react';
import { Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import search from '../../assets/search.svg';

const CanvasSearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <InputGroup m={'24px 0px'}>
      <InputLeftElement
        pointerEvents="none"
        children={<Image src={search} boxSize="1.3rem" />}
      />
      <Input
        w="100%"
        h="40px"
        backgroundColor="#f1f1f1"
        fontSize="14px"
        fontWeight="500"
        border="1px solid #767676"
        borderRadius="8px"
        p="0 40px"
        placeholder="캔버스명으로 검색해주세요."
        _placeholder={{ color: 'black' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
};

export default CanvasSearchBar;
