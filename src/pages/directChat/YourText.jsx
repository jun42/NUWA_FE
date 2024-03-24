import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import ChatboxContentView from '@components/TextEditorFunctionalComponent/ChatboxContentView';

const YourText = ({
  senderName,
  sendedTime,
  content,
  deleteSocketMessage,
  messageId,
  isDeleted,
}) => {
  return (
    <Flex width={'100%'} justifyContent={'flex-start'} py="0.75rem" px={'1rem'}>
      <Box height={'100%'} width={'4rem'}>
        <Avatar name={senderName} />
      </Box>
      <Box width={'45%'}>
        <Flex
          height={'3.5rem'}
          justifyContent={'space-between'}
          alignItems={'top'}
        >
          <Text color={'#4D5E80'} fontSize={'16px'} fontWeight={700}>
            {senderName}
          </Text>
          <Text color={'#ADB8CC'} fontSize={'14px'} fontWeight={700}>
            12:45
          </Text>
        </Flex>
        <Box borderRadius={'10px'} bg={'#f5f7ff'} py={'14px'} px={'30px'}>
          <ChatboxContentView content={content} isDeleted={isDeleted} />
        </Box>
      </Box>
    </Flex>
  );
};

export default YourText;
