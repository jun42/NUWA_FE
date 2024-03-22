import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react';
import ChatboxContentView from '@components/TextEditorFunctionalComponent/ChatboxContentView';
import { dateToHourMinute } from '@utils/date';
import { useState } from 'react';
import GroupChatTextMenu from '@components/Menu/GroupChatTextMenu';
const GroupMessageBox = ({
  senderName,
  content,
  createdAt,
  isDeleted,
  deleteSocketMessage,
  messageId,
  messageType,
  updatePublish,
  isMyMessage,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  return (
    <Box
      display={'flex'}
      gap={'1rem'}
      _hover={{ backgroundColor: 'gray.50' }}
      p={'1rem'}
      rounded={'xl'}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Box>
        <Avatar size={'md'} />
      </Box>
      <Stack>
        <Flex
          alignItems={'center'}
          justifyContent={'flex-start'}
          gap={'1rem'}
          height={'1rem'}
        >
          <Text color={'#4d5380'} fontSize={'14px'} fontWeight={'bold'}>
            {senderName}
          </Text>
          <Text fontSize={'12px'} color={'#adb8cc'}>
            {dateToHourMinute(createdAt)}
          </Text>
          {isHover && isMyMessage && (
            <GroupChatTextMenu
              isDeleted={isDeleted}
              deleteSocketMessage={deleteSocketMessage}
              messageId={messageId}
              messageType={messageType}
              setReadOnly={setReadOnly}
            />
          )}
        </Flex>
        <Box maxW={'50vw'}>
          <ChatboxContentView
            content={content}
            isDeleted={isDeleted}
            readOnly={readOnly}
            updatePublish={updatePublish}
            setReadOnly={setReadOnly}
            messageId={messageId}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default GroupMessageBox;
