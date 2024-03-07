import React from 'react';
import StModal from '../StModal';
import ModalBody from './ModalBody';
import { Text } from '@chakra-ui/react';
const index = ({ isOpen, onClose, onStateChange }) => {
  if (!isOpen) return null;
  return (
    <div>
      <StModal
        isOpen={isOpen}
        onClose={onClose}
        modalTitle="상태설정"
        width={'auto'}
        height={'auto'}
        subTitle="현재 고객님의 상태를 선택해주세요."
      >
        <ModalBody onStateChange={onStateChange} />
      </StModal>
    </div>
  );
};

export default index;
