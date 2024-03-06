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
import { useNavigate, useParams } from 'react-router-dom';

import useBoundStore from '@store/store';
import { createDirectChatRoom } from '@apis/chat/chat';

import { useGetWorkspaceProfileQuery } from '@queries/workspaceProfile';
import { useWorkSpaceMemberListQuery } from '@queries/workSpace/workSpaceMemberList';

import MemberListCard from './MemberListCard';

const AddDirectChatRoomModal = () => {
  const navigate = useNavigate();
  const setReceiverId = useBoundStore((state) => state.setReceiverId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { workSpaceId } = useParams();

  const { data: currentUserWorkspaceProfile } =
    useGetWorkspaceProfileQuery(workSpaceId);
  const { memberList, isLoading } = useWorkSpaceMemberListQuery(workSpaceId);

  return (
    <>
      <Button onClick={onOpen} colorScheme="secondary" borderRadius={'lg'}>
        채팅방 추가
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={'20px'}>대화 상대 초대</ModalHeader>
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
                        onClick={() => {
                          //채팅에서 쓸 리시버아이디 설정
                          setReceiverId(member.id);
                          //채팅룸 생성 혹은 중복시 핸들링
                          createDirectChatRoom({
                            workSpaceId,
                            joinMemberId: member.id,
                          })
                            .then((r) => {
                              const roomId = r.data.data.directChannelRoomId;
                              navigate(
                                `/workspace/${workSpaceId}/direct-chat/${roomId}`
                              );
                            })
                            .catch((err) => {
                              console.log(err.response);
                              if (err.response.status === 400) {
                                const roomId = err.response.data.message;
                                navigate(
                                  `/workspace/${workSpaceId}/direct-chat/${roomId}`
                                );
                              }
                            })
                            .finally(() => {
                              onClose();
                            });
                        }}
                        name={member.name}
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
