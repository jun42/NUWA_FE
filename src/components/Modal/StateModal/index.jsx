import React from 'react';
import StModal from '../StModal';
import ModalBody from './ModalBody';
import { useMutation } from '@tanstack/react-query';
import { updateUserProfileStatus } from '@apis/workspace/workspaceStatus.js';
const index = ({ isOpen, onClose, workSpaceId, refetchUserProfile }) => {
  const mutation = useMutation({
    mutationFn: updateUserProfileStatus,
    onSuccess: () => {
      refetchUserProfile();
      onClose();
    },
  });

  if (!isOpen) return null;

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
        <ModalBody
          onSave={(newStatus) => mutation.mutate({ workSpaceId, newStatus })}
          onClose={onClose}
        />
      </StModal>
    </div>
  );
};

export default index;
