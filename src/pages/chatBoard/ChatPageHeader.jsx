import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { request } from '../../apis/axios/axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { createDirectChatRoom } from '../../apis/chat/chat';
import { useGetWorkspaceProfileQuery } from '../../queries/workspaceProfile';
import useBoundStore from '../../store/store';

const ChatPageHeader = () => {
  const setReceiverId = useBoundStore((state) => state.setReceiverId);
  console.log(setReceiverId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { workSpaceId } = useParams();
  const { data: currentUserWorkspaceProfile } =
    useGetWorkspaceProfileQuery(workSpaceId);
  const [memberList, setMemberList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    request
      .get(`workspace/${workSpaceId}/members`)
      .then((r) => setMemberList(r.data.data));
  }, []);
  console.log(currentUserWorkspaceProfile);
  return (
    <Stack width={'100%'} py={'1%'}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={'36px'} fontWeight={600}>
          채팅
        </Text>
        <Button onClick={onOpen} colorScheme="secondary" borderRadius={'lg'}>
          채팅방 추가
        </Button>
      </Flex>
      <InputGroup>
        <InputLeftElement>{/* icon */}</InputLeftElement>
        <Input placeholder="채팅방의 이름 또는 닉네임을 검색하세요." />
      </InputGroup>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              {memberList.length > 0 &&
                memberList
                  .filter(
                    (member) => member.id !== currentUserWorkspaceProfile.id
                  )
                  .map((member) => {
                    return (
                      <Button
                        key={member.email}
                        onClick={(e) => {
                          console.log(member.id);
                          setReceiverId(member.id);
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
                      >
                        {member.email}
                      </Button>
                    );
                  })}
            </Stack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default ChatPageHeader;
