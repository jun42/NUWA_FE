import React from 'react';
import Modal from './Modal';
import ModalBody from './ModalBody';
const CanvasModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} modalTitle="새 캔버스 작성">
      <ModalBody />
    </Modal>
  );
};

export default CanvasModal;
