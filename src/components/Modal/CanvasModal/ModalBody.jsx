import React from 'react';
import { Textarea } from '@chakra-ui/react';
import styled from 'styled-components';
import CanvasTextEditor from '@components/CanvasEditor/CanvasTextEditor';
const ModalBody = () => {
  return (
    <StContainer>
      <CanvasTextEditor />
    </StContainer>
  );
};

export default ModalBody;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
`;
