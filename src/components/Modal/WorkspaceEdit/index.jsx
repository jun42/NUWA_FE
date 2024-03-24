import React from 'react';
import StModal from '../StModal';
import ModalBody from './ModalBody';
const WorkSpaceModalEdit = ({ isOpen, onClose, currentWorkspaceName }) => {
  if (!isOpen) return null;
  return (
    <StModal
      isOpen={isOpen}
      onClose={onClose}
      modalTitle="워크스페이스 정보편집"
      width={'30%'}
      height={'auto'}
    >
      <ModalBody
        currentWorkspaceName={currentWorkspaceName}
        onClose={onClose}
      />
    </StModal>
  );
};

export default WorkSpaceModalEdit;
