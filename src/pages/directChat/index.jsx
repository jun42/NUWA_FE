import { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import DirectChatHeader from './DirectChatHeader';
import MyText from './MyText';
import YourText from './YourText';
import useSocketInit from './useSocketInit';

import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';

import { useWorkspaceUserProfileQuery } from '@queries/workspaceProfile';
import { useDirectChatMessageListQuery } from '@queries/workSpace/directChatMessageList';

import useChatBoxScroll from '@hooks/directChat/useChatBoxScroll';
import useChatBoxScrollToBottom from '@hooks/directChat/useChatBoxScrollToBottom';
//todo api 에러 핸들링시 페이지 안깨지도록
const DirectChatPage = () => {
  const { roomId, workSpaceId } = useParams();

  const { data, isLoading } = useWorkspaceUserProfileQuery(workSpaceId);
  const userId = data?.id;

  const chatBoxRef = useRef(null);
  const { directChatMessageList, isLoading: directChatMessageListIsLoading } =
    useDirectChatMessageListQuery(roomId);
  useChatBoxScrollToBottom(chatBoxRef, directChatMessageList);

  const { publish, socketMessageList } = useSocketInit(
    roomId,
    userId,
    workSpaceId
  );
  useChatBoxScroll(chatBoxRef, socketMessageList);

  return (
    <Box width="100%" p={'0.5rem'}>
      {!isLoading && (
        <>
          <DirectChatHeader />
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
      )}
    </Box>
  );
};

export default DirectChatPage;
