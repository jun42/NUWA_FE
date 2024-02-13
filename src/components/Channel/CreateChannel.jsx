import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Text,
  Flex,
  Input,
  Box,
  Stack,
} from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { useState } from 'react';
import CreateChannelHeader from './CreateChannelHeader';
import CreateChannelNameInput from './CreateChannelNameInput';
import CreateChannelGuide from './CreateChannelGuide';
const CreateChannel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState('1');
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={'600px'}>
          <CreateChannelHeader />
          <ModalBody display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <CreateChannelGuide />
            <CreateChannelNameInput />
            <Flex flexDirection={'column'}>
              <div>채널 종류 선택</div>
              <RadioGroup onChange={setValue} value={value}>
                <Stack>
                  <Radio colorScheme="grey" value="1" bgColor={'grey'}>
                    First
                  </Radio>
                  <Radio value="2">Second</Radio>
                  <Radio value="3">Third</Radio>
                </Stack>
              </RadioGroup>
              <div>
                채팅채널 - 파일, 이미지, TEXT를 통해 팀원에게 정보를 전달하세요
              </div>
              <div></div>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="secondary" width={'100%'} fontWeight={500}>
              생성하기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateChannel;
