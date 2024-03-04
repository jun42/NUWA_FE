import { Stack } from '@chakra-ui/layout';
import ChatPageHeader from './ChatPageHeader';
import styled from 'styled-components';
import ChatPreviewBox from './ChatPreviewBox';
import { useEffect, useState } from 'react';
import { getDirectChatRoomList } from '../../apis/chat/chat';
import { useParams } from 'react-router';
import { request } from '../../apis/axios/axios';

const MockData = [
  {
    roomId: '1',
    name: 'channelName',
    workSpaceId: 1,
    createMemberId: 1,
    joinMemberId: 2,
    createMemberName: 'createMemberName',
    joinMemberName: 'joinMemberName',
    unReadCount: 10,
    lastMessage: 'lastMessage',
    messageCreatedAt: '2024-02-22 00:43:44.417',
  },
  {
    roomId: '2',
    name: 'channelName',
    workSpaceId: 1,
    createMemberId: 1,
    joinMemberId: 2,
    createMemberName: 'createMemberName',
    joinMemberName: 'joinMemberName',
    unReadCount: 120,
    lastMessage: 'lastMessage',
    messageCreatedAt: '2024-02-22 00:43:44.417',
  },
];
//todo : 본인 프로필 이름 혹은 workspaceid로 본인인지 상대인지 확인
const ChatPage = () => {
  const [chatList, setChatList] = useState([]);
  const { workSpaceId } = useParams();
  useEffect(() => {
    getDirectChatRoomList(workSpaceId).then(console.log);
  }, []);
  return (
    <StContainer>
      <ChatPageHeader />
      <Stack>
        {chatList.map((chat) => {
          return (
            <ChatPreviewBox
              key={chat.roomId}
              messageCreatedAt={chat.messageCreatedAt}
              lastMessage={chat.lastMessage}
              unReadCount={chat.unReadCount}
              conversationPartner={chat.joinMemberName}
            />
          );
        })}
      </Stack>
    </StContainer>
  );
};

export default ChatPage;

const StContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;
