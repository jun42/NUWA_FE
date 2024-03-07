import { Box, Button } from '@chakra-ui/react';
import DirectChatHeader from './DirectChatHeader';
// import TextEditor from '@components/TextEditor/TextEditor';
import MyText from './MyText';
import YourText from './YourText';
import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';
// import sockjs from 'sockjs-client/dist/sockjs';
import { useParams } from 'react-router-dom';
import useSocketInit from './useSocketInit';
import { useWorkspaceUserProfileQuery } from '@queries/workspaceProfile';
import { useDirectChatMessageListQuery } from '../../queries/workSpace/directChatMessageList';
import { useEffect, useRef } from 'react';
import useChatBoxScroll from '../../hooks/directChat/useChatBoxScroll';

const DirectChatPage = () => {
  const chatBoxRef = useRef(null);

  const { roomId, workSpaceId } = useParams();

  const { data, isLoading } = useWorkspaceUserProfileQuery(workSpaceId);
  const userId = data?.id;
  const { publish, socketMessageList } = useSocketInit(
    roomId,
    userId,
    workSpaceId
  );
  console.log('asdfasdf', roomId);
  const { directChatMessageList, isLoading: directChatMessageListIsLoading } =
    useDirectChatMessageListQuery(roomId);

  useChatBoxScroll(chatBoxRef, [socketMessageList]);

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
