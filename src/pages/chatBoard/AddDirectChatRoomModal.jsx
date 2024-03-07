import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { useWorkSpaceMemberListQuery } from '@queries/workSpace/workSpaceMemberList';
import { useWorkspaceUserProfileQuery } from '@queries/workspaceProfile';

import MemberListCard from './MemberListCard';

const AddDirectChatRoomModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { workSpaceId } = useParams();

  const { data: currentUserWorkspaceProfile } =
    useWorkspaceUserProfileQuery(workSpaceId);
  const { memberList, isLoading } = useWorkSpaceMemberListQuery(workSpaceId);

  return (
    <>
      <Button onClick={onOpen} colorScheme="secondary" borderRadius={'lg'}>
        채팅방 추가
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={'20px'} fontWeight={500}>
            대화 상대 초대
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              {!isLoading &&
                memberList.length > 0 &&
                memberList
                  .filter(
                    (member) => member.id !== currentUserWorkspaceProfile.id
                  )
                  .map((member) => {
                    return (
                      <MemberListCard
                        key={member.email}
                        id={member.id}
                        name={member.name}
                        onClose={onClose}
                      />
                    );
                  })}
            </Stack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDirectChatRoomModal;
