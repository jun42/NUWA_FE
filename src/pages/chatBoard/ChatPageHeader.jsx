import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Flex, Stack, Text } from '@chakra-ui/layout';

const ChatPageHeader = () => {
  return (
    <Stack width={'100%'} py={'1%'}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={'36px'} fontWeight={600}>
          채팅
        </Text>
        <Button colorScheme="secondary" borderRadius={'lg'}>
          채팅방 추가
        </Button>
      </Flex>
      <InputGroup>
        <InputLeftElement>{/* icon */}</InputLeftElement>
        <Input placeholder="채팅방의 이름 또는 닉네임을 검색하세요." />
      </InputGroup>
    </Stack>
  );
};

export default ChatPageHeader;
