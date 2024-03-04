import { Box, Circle, Text } from '@chakra-ui/react';
import ChatPreviewMain from './ChatPreviewMain';

const ChatPreviewBox = ({
  messageCreatedAt,
  lastMessage,
  unReadCount,
  conversationPartner,
}) => {
  return (
    <Box
      width={'100%'}
      border={'1px'}
      p={'12px'}
      borderColor={'grey.300'}
      rounded={'lg'}
      display={'flex'}
      gap={'1rem'}
      justifyContent={'space-between'}
    >
      <ChatPreviewMain
        lastMessage={lastMessage}
        conversationPartner={conversationPartner}
      />
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-end'}
        justifyContent={'space-between'}
      >
        <Text color={'#ADB8CC'} fontSize={'14px'} fontWeight={700}>
          {messageCreatedAt}
        </Text>
        <Circle
          bg={'red'}
          size={'20px'}
          color={'white'}
          fontSize={'10px'}
          textAlign={'center'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          {unReadCount <= 50 ? unReadCount : '50+'}
        </Circle>
      </Box>
    </Box>
  );
};

export default ChatPreviewBox;
