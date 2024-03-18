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
import { useParams } from 'react-router';
import { useChatChannelListCreateMutation } from '@queries/groupChat.js/useGroupChatList';

const CreateChannelModal = () => {
  const { workSpaceId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [channelType, setChannelType] = useState('');
  const [channelOpenType, setChannelOpenType] = useState('');
  const [channelName, setChannelName] = useState('');

  const { mutate: createGroupChannel } = useChatChannelListCreateMutation(
    workSpaceId,
    channelName,
    channelType
  );
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
        <ModalContent
          minWidth={'600px'}
          paddingTop={'27px'}
          paddingLeft={'40px'}
          paddingRight={'27px'}
        >
          <CreateChannelHeader />
          <ModalBody display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <CreateChannelGuide />
            <CreateChannelNameInput
              channelName={channelName}
              setChannelName={setChannelName}
            />
            <ChannelRadio
              name={'채널 종류'}
              value={channelType}
              setValue={setChannelType}
              RadioConstants={CHANNEL_TYPE}
            />
            <ChannelRadio
              name={'채널 공개/비공개 여부'}
              value={channelOpenType}
              setValue={setChannelOpenType}
              RadioConstants={CHANNEL_OPEN_TYPE}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="secondary"
              width={'100%'}
              fontWeight={500}
              onClick={() => {
                createGroupChannel({ workSpaceId, channelName, channelType });
                onClose();
              }}
              isDisabled={channelName === ''}
            >
              생성하기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateChannelModal;
