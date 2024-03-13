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
      width="520px"
      height="auto"
    >
      <Box mt={-3} mb={3}>
        <Divider color="#898989" />
      </Box>
      <ModalBody profile={profile} onSave={onSave} />
    </StModal>
  );
};
export default ProfileModal;
