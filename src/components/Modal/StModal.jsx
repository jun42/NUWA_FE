import React from 'react';
import styled from 'styled-components';
import { Flex, Text, CloseButton } from '@chakra-ui/react';

const Modal = ({
  isOpen,
  onClose,
  modalTitle,
  subTitle,
  children,
  width,
  height,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent width={width} height={height}>
        <ModalHeader>
          <Flex justify="space-between" alignItems="center">
            <Flex flexDir="column" justify="flex-start">
              <Text fontSize="2xl" fontWeight="bold">
                {modalTitle}
              </Text>
              <Text fontSize="xs" fontWeight="bold" color="grey">
                {subTitle}
              </Text>
            </Flex>
            <CloseButton onClick={onClose} size="lg" />
          </Flex>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: ${(props) => props.width || '50%'};
  height: ${(props) => props.height || 'auto'};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ModalHeader = styled.div`
  width: 100%;
`;

const ModalBody = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto; // If modal content is long
`;
