import { Flex, Text } from '@chakra-ui/react';
import ChatPreviewAvatar from './ChatPreviewAvatar';

const ChatPreviewMain = ({ lastMessage, conversationPartner }) => {
  return (
    <Flex gap={4}>
      <ChatPreviewAvatar />
      <Flex direction={'column'} justifyContent={'space-between'}>
        <Text fontWeight={'bold'} color={'#4D5E80'}>
          {conversationPartner}
        </Text>
        {/* TODO delta에서 text만 가져오고 앞부분만 슬라이스 해야. */}
        <Text color={'#ADB8CC'}>lastMessage</Text>
      </Flex>
    </Flex>
  );
};

export default ChatPreviewMain;
