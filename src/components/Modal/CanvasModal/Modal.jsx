import React from 'react';
import styled from 'styled-components';
import { Flex, Text, CloseButton } from '@chakra-ui/react';
const Modal = ({ isOpen, onClose, modalTitle, children }) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <Flex justify="space-between" alignItems="center">
            <Text fontSize={'lg'} fontWeight={'bold'}>
              {modalTitle}
            </Text>
            <CloseButton onClick={onClose} />
          </Flex>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  height: 80%;
  display: flex;
  flex-flow: column;
  gap: 20px;
`;

const ModalHeader = styled.div``;

const ModalBody = styled.div`
  width: 100%;
  height: 100%;
`;
