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
  Flex,
  Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { useWorkSpaceMemberListQuery } from '@queries/workSpace/workSpaceMemberList';
import { useWorkspaceUserProfileQuery } from '@queries/workspaceProfile';

import MemberListCard from './MemberListCard';

const AddDirectChatRoomModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { workSpaceId } = useParams();

  const {
    data: currentUserWorkspaceProfile,
    isLoading: currentUserProfileIsLoading,
  } = useWorkspaceUserProfileQuery(workSpaceId);
  const { memberList, isLoading: memberListIsLoading } =
    useWorkSpaceMemberListQuery(workSpaceId);

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
            <Stack height={'50vh'} overflowY={'scroll'}>
              {!memberListIsLoading &&
              !currentUserProfileIsLoading &&
              memberList.length > 1 ? (
                memberList
                  .filter((member) => {
                    return member.id !== currentUserWorkspaceProfile.id;
                  })
                  .map((member) => {
                    return (
                      <MemberListCard
                        key={member.email}
                        id={member.id}
                        name={member.name}
                        onClose={onClose}
                      />
                    );
                  })
              ) : (
                <Flex
                  justifyContent={'center'}
                  alignItems={'center'}
                  height={'50vh'}
                >
                  <Text
                    fontSize={'16px'}
                    color={'grey.400'}
                    textAlign={'center'}
                  >
                    멤버가 없습니다. <br />
                    새로운 멤버를 초대해보세요!
                  </Text>
                </Flex>
              )}
            </Stack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDirectChatRoomModal;
