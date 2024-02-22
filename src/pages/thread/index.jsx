import React from 'react';
import styled from 'styled-components';
import { Text, Divider, Box, Flex, Circle, VStack } from '@chakra-ui/react';
const thread = () => {
  return (
    <Stcontainer>
      <Text fontSize={'24px'} fontWeight={'700'} mb={'10px'}>
        스레드
      </Text>
      <Divider mb={'20px'} />
    </Stcontainer>
  );
};

export default thread;

const Stcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 50px;
`;
