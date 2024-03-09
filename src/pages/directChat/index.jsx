import { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { useLoaderData, useParams } from 'react-router-dom';

import DirectChatHeader from './DirectChatHeader';
import MyText from './MyText';
import YourText from './YourText';
import useSocketInit from './useSocketInit';

import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';

import { useWorkspaceUserProfileQuery } from '@queries/workspaceProfile';
import { useDirectChatMessageListQuery } from '@queries/workSpace/directChatMessageList';
import { useDirectChatRoomInfoQuery } from '@queries/chat/useDirectChatRoomInfo';

import useChatBoxScroll from '@hooks/directChat/useChatBoxScroll';
import useChatBoxScrollToBottom from '@hooks/directChat/useChatBoxScrollToBottom';
//todo api 에러 핸들링시 페이지 안깨지도록
const DirectChatPage = () => {
  const { chatRoomInfo, userProfile } = useLoaderData();
  const { roomId, workSpaceId } = useParams();

  let userId = userProfile.id;
  let receiverId;
  let receiverName;
  if (chatRoomInfo.createMemberId === userId) {
    receiverId = chatRoomInfo.joinMemberId;
    receiverName = chatRoomInfo.joinMemberName;
  } else {
    receiverId = chatRoomInfo.createMemberId;
    receiverName = chatRoomInfo.createMemberName;
  }

  const chatBoxRef = useRef(null);
  const { directChatMessageList, isLoading: directChatMessageListIsLoading } =
    useDirectChatMessageListQuery(roomId);
  useChatBoxScrollToBottom(chatBoxRef, directChatMessageList);

  const { publish, socketMessageList } = useSocketInit(
    roomId,
    userId,
    workSpaceId,
    receiverId
  );
  useChatBoxScroll(chatBoxRef, socketMessageList);

  return (
    <Box width="100%" p={'0.5rem'}>
      {
        <>
          <DirectChatHeader receiverName={receiverName} />
          <Box
            minH={'50vh'}
            maxH={'70vh'}
            border={'1px'}
            overflowY={'scroll'}
            ref={chatBoxRef}
          >
            {!directChatMessageListIsLoading &&
              directChatMessageList.map((body) => {
                if (userId === body.senderId) {
                  return <MyText key={body.createdAt} content={body.content} />;
                } else {
                  return (
                    <YourText
                      key={body.createdAt}
                      content={body.content}
                      senderName={body.senderName}
                    />
                  );
                }
              })}
            {/* socket message view */}
            {socketMessageList.map((body) => {
              if (userId === body.senderId) {
                return <MyText key={body.createdAt} content={body.content} />;
              } else {
                return (
                  <YourText
                    key={body.createdAt}
                    content={body.content}
                    senderName={body.senderName}
                  />
                );
              }
            })}
          </Box>
          <TextEditor publish={publish} />
        </>
      }
    </Box>
  );
};

export default DirectChatPage;
