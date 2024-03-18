import React from 'react';
import StModal from '../StModal';
import ModalBody from './ModalBody';
const CanvasModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <StModal isOpen={isOpen} onClose={onClose} modalTitle="새 캔버스 작성">
      <ModalBody />
    </StModal>
  );
};

export default CanvasModal;
