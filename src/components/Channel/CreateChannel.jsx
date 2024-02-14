import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import CreateChannelHeader from './CreateChannelHeader';
import CreateChannelNameInput from './CreateChannelNameInput';
import CreateChannelGuide from './CreateChannelGuide';
import ChannelRadio from './ChannelRadio';
import {
  CHANNEL_OPEN_TYPE,
  CHANNEL_TYPE,
} from '@constants/channel/CHANNEL_TYPE';
import add_sm from '@assets/add_sm.svg';

const CreateChannel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [channelType, setChannelType] = useState('');
  const [channelOpenType, setChannelOpenType] = useState('');
  return (
    <>
      <IconButton
        size="xs"
        position="absolute"
        right="0"
        bgColor="#f1f1f1"
        icon={<Image src={add_sm} alt="" />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={'600px'}>
          <CreateChannelHeader />
          <ModalBody display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <CreateChannelGuide />
            <CreateChannelNameInput />
            <ChannelRadio
              value={channelType}
              setValue={setChannelType}
              RadioConstants={CHANNEL_TYPE}
            />
            <ChannelRadio
              value={channelOpenType}
              setValue={setChannelOpenType}
              RadioConstants={CHANNEL_OPEN_TYPE}
            />
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
