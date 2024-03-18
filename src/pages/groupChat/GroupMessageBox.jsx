import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react';
import ChatboxContentView from '@components/TextEditorFunctionalComponent/ChatboxContentView';
import { dateToHourMinute } from '@utils/date';
const GroupMessageBox = ({ senderName, content, createdAt }) => {
  return (
    <Box
      display={'flex'}
      gap={'1rem'}
      _hover={{ backgroundColor: 'gray.50' }}
      p={'1rem'}
      rounded={'xl'}
    >
      <Box>
        <Avatar size={'md'} />
      </Box>
      <Stack>
        <Flex alignItems={'center'} justifyContent={'flex-start'} gap={'1rem'}>
          <Text color={'#4d5380'} fontSize={'14px'} fontWeight={'bold'}>
            {senderName}
          </Text>
          <Text fontSize={'12px'} color={'#adb8cc'}>
            {dateToHourMinute(createdAt)}
          </Text>
        </Flex>
        <Box maxW={'50vw'}>
          <ChatboxContentView content={content} />
        </Box>
      </Stack>
    </Box>
  );
};

export default GroupMessageBox;
