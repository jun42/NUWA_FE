import React from 'react';
import StModal from '../StModal';
import ModalBody from './ModalBody';
const WorkSpaceModalEdit = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <StModal
      isOpen={isOpen}
      onClose={onClose}
      modalTitle="워크스페이스 정보편집"
      width={'30%'}
      height={'auto'}
    >
      <ModalBody />
    </StModal>
  );
};

export default WorkSpaceModalEdit;
