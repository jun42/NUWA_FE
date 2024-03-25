import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import AddDirectChatRoomModal from './AddDirectChatRoomModal';
import _ from 'lodash';

const ChatPageHeader = ({
  workSpaceMemberName,
  setWorkSpaceMemberName,
  debounceRequest,
}) => {
  return (
    <Stack width={'100%'} py={'1%'}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={'36px'} fontWeight={600}>
          채팅
        </Text>
        <AddDirectChatRoomModal />
      </Flex>
      <InputGroup>
        <InputLeftElement>{/* icon */}</InputLeftElement>
        <Input
          placeholder="채팅방의 이름 또는 닉네임을 검색하세요."
          value={workSpaceMemberName}
          onChange={(e) => {
            setWorkSpaceMemberName(e.target.value);
            if (e.target.value.length === 0) {
              // console.log('empty');
            } else {
              debounceRequest();
            }
          }}
        />
      </InputGroup>
    </Stack>
  );
};

export default ChatPageHeader;
