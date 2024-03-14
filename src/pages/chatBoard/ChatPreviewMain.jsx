import { Box, Flex, Text } from '@chakra-ui/react';
import ChatPreviewAvatar from './ChatPreviewAvatar';
import Quill from 'quill';
import ReactQuill from 'react-quill';

const ChatPreviewMain = ({ lastMessage, conversationPartner }) => {
  const Delta = Quill.import('delta');
  let lastMessageObject;
  if (lastMessage === '삭제된 메세지입니다.') {
    lastMessageObject = [{ insert: lastMessage }];
  } else {
    lastMessageObject = JSON.parse(lastMessage);
  }
  let defaultValue;
  if (lastMessageObject === null) {
    defaultValue = new Delta().insert('대화가 없습니다.');
  } else if (lastMessageObject[0].insert?.image) {
    defaultValue = new Delta().insert('사진');
  } else {
    defaultValue = new Delta({ ops: lastMessageObject }).slice(0, 10);
  }
  console.log(defaultValue);
  return (
    <Flex gap={4} overflowX={'hidden'} width={'20vw'}>
      <ChatPreviewAvatar />
      <Flex direction={'column'} justifyContent={'space-between'}>
        <Text fontWeight={'bold'} color={'#4D5E80'}>
          {conversationPartner}
        </Text>
        {/* TODO delta에서 text만 가져오고 앞부분만 슬라이스 해야. */}
        <Box id="chat" color={'#ADB8CC'}>
          <ReactQuill
            readOnly={true}
            defaultValue={defaultValue}
            modules={{ toolbar: '#chat' }}
            theme={false}
            style={{}}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ChatPreviewMain;
