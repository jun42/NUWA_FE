import React from 'react';
import { Textarea } from '@chakra-ui/react';
import styled from 'styled-components';
const ModalBody = () => {
  return (
    <StContainer>
      <Textarea
        placeholder="여기에 입력하세요..."
        size={'lg'}
        width={'100%'}
        height={'100%'}
      />
    </StContainer>
  );
};

export default ModalBody;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
`;
