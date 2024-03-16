import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import ChatboxContentView from '../../components/TextEditorFunctionalComponent/ChatboxContentView';
const GroupMessageBox = ({ senderName, content }) => {
  return (
    <Box display={'flex'} gap={'1rem'}>
      <Box>
        <Avatar size={'md'} />
      </Box>
      <Stack>
        <Flex alignItems={'center'} justifyContent={'flex-start'} gap={'1rem'}>
          <Text color={'#4d5380'} fontSize={'14px'} fontWeight={'bold'}>
            {senderName}
          </Text>
          <Text fontSize={'12px'} color={'#adb8cc'}>
            12:45
          </Text>
        </Flex>
        <Box border={'1px'} maxW={'50vw'}>
          <ChatboxContentView content={content} />
        </Box>
      </Stack>
    </Box>
  );
};

export default GroupMessageBox;
