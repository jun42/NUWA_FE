import React from 'react';
import StModal from '../StModal';
import ModalBody from './ModalBody';
const CanvasEdit = ({
  isOpen,
  onClose,
  canvasTitle,
  canvasContent,
  canvasId,
}) => {
  if (!isOpen) return null;
  return (
    <StModal isOpen={isOpen} onClose={onClose} modalTitle="캔버스 수정">
      <ModalBody
        onClose={onClose}
        title={canvasTitle}
        content={canvasContent}
        canvasId={canvasId}
      />
    </StModal>
  );
};

export default CanvasEdit;
