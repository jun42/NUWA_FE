import React from 'react';
import { Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import search from '@assets/search.svg';

const WorkspaceSearchBar = () => {
  return (
    <InputGroup m={'32px 0px'}>
      <InputLeftElement
        pointerEvents="none"
        children={<Image src={search} boxSize="1.3rem" />}
      />
      <Input
        w="100%"
        h="40px"
        backgroundColor="#F6F7FF"
        fontSize="14px"
        fontWeight="500"
        border="1px solid #d6d6d6"
        borderRadius="15px"
        p="0 40px"
        placeholder="NUWA_Project 검색"
        _placeholder={{ color: '#5d5d5d', fontWeight: '480', fontSize: '14px' }}
      />
    </InputGroup>
  );
};

export default WorkspaceSearchBar;
