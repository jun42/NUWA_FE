import React from 'react';
import StModal from '../StModal';
import ModalBody from './ModalBody';
const ProfileModal = () => {
  return (
    <StModal
      isOpen={isOpen}
      onClose={onClose}
      modalTitle="프로필 편집"
      width={'30%'}
      height={'auto'}
    >
      <ModalBody />
    </StModal>
  );
};

export default ProfileModal;
