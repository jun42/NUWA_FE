import { Stack, Box, Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import ChatPageHeader from './ChatPageHeader';
import styled from 'styled-components';
import ChatPreviewBox from './ChatPreviewBox';
import { useParams } from 'react-router';
import { useDirectChatRoomListQuery } from '../../queries/chat/useDirectChatRoomList';

//todo : 본인 프로필 이름 혹은 workspaceid로 본인인지 상대인지 확인
const ChatPage = () => {
  const { workSpaceId } = useParams();

  const {
    data: chatList,
    isLoading,
    isError,
  } = useDirectChatRoomListQuery(workSpaceId);
  console.log(chatList);
  return (
    <StContainer>
      <ChatPageHeader />
      <Stack>
        {!isLoading && !isError && chatList.length !== 0 ? (
          chatList.map((chat) => {
            return (
              <ChatPreviewBox
                key={chat.roomId}
                messageCreatedAt={chat.messageCreatedAt}
                lastMessage={chat.lastMessage}
                unReadCount={chat.unReadCount}
                joinMemberName={chat.joinMemberName}
                createMemberName={chat.createMemberName}
                roomId={chat.roomId}
                createMemberId={chat.createMemberId}
                joinMemberId={chat.joinMemberId}
                onClick={() => {}}
              />
            );
          })
        ) : (
          <Flex justifyContent={'center'} alignItems={'center'} height={'50vh'}>
            <Text fontSize={'20px'} color={'grey.400'}>
              기록이 없습니다. 대화를 시작해보세요!
            </Text>
          </Flex>
        )}
      </Stack>
    </StContainer>
  );
};

export default ChatPage;

const StContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

// const MockData = [
//   {
//     roomId: '1',
//     name: 'channelName',
//     workSpaceId: 1,
//     createMemberId: 1,
//     joinMemberId: 2,
//     createMemberName: 'createMemberName',
//     joinMemberName: 'joinMemberName',
//     unReadCount: 10,
//     lastMessage: 'lastMessage',
//     messageCreatedAt: '2024-02-22 00:43:44.417',
//   },
//   {
//     roomId: '2',
//     name: 'channelName',
//     workSpaceId: 1,
//     createMemberId: 1,
//     joinMemberId: 2,
//     createMemberName: 'createMemberName',
//     joinMemberName: 'joinMemberName',
//     unReadCount: 120,
//     lastMessage: 'lastMessage',
//     messageCreatedAt: '2024-02-22 00:43:44.417',
//   },
// ];
