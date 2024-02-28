import React from 'react';
import StModal from '../StModal';
import ModalBody from './ModalBody';
import { Divider, Box } from '@chakra-ui/react';

const ProfileModal = ({ isOpen, onClose, profile, onSave }) => {
  if (!isOpen) return null;
  return (
    <StModal
      isOpen={isOpen}
      onClose={onClose}
      modalTitle="프로필"
      width={'30%'}
      height={'930px'}
    >
      <Box mt={-10} mb={3}>
        <Divider />
      </Box>
      <ModalBody profile={profile} onSave={onSave} />
    </StModal>
  );
};
export default ProfileModal;
