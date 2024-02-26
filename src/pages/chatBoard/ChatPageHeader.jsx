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
import { useParams } from 'react-router-dom';

const ChatPageHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { workspaceId } = useParams();
  console.log(workspaceId);
  const [memberList, setMemberList] = useState([]);
  useEffect(() => {
    request
      .get(`workspace/${workspaceId}/members`)
      .then((r) => setMemberList(r.data.data));
  }, []);
  console.log(memberList);
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
                memberList.map((member) => {
                  return <Button key={member.email}>{member.email}</Button>;
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
