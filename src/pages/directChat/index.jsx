import { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useLoaderData, useParams } from 'react-router-dom';

import DirectChatHeader from './DirectChatHeader';
import MyText from './MyText';
import YourText from './YourText';

import useSocketInit from '@apis/socket/useSocketInit';
import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';

import { useDirectChatMessageListQuery } from '@queries/workSpace/directChatMessageList';

import useChatBoxScroll from '@hooks/directChat/useChatBoxScroll';
import useChatBoxScrollToBottom from '@hooks/directChat/useChatBoxScrollToBottom';
import DirectChatBoard from './DirectChatBoard';
import useBoundStore from '../../store/store';
import useDeleteDirectChatMessage from './useDeleteDirectChatMessage';
import useUpdateDirectChatMessage from './useUpdateDirectChatMessage';
import { getReceiver } from './utils';
import _ from 'lodash';
//todo api 에러 핸들링시 페이지 안깨지도록
const DirectChatPage = () => {
  const { isDirectChatBoxExpand: isExpand } = useBoundStore();

  const { chatRoomInfo, userProfile } = useLoaderData();
  const { roomId, workSpaceId } = useParams();
  const [totalMessageList, setTotalMessageList] = useState([]);

  // define receiver
  let userId = userProfile?.id;

  const { receiverId, receiverName } = getReceiver(userId, chatRoomInfo);

  const chatBoxRef = useRef(null);

  const [messageIndex, setMessageIndex] = useState(0);
  const pageSize = 20;
  const { directChatMessageList, isLoading: directChatMessageListIsLoading } =
    useDirectChatMessageListQuery(roomId, messageIndex, pageSize);
  useChatBoxScrollToBottom(chatBoxRef, directChatMessageList, messageIndex);

  // useDirectChatMessageInfiniteQuery(roomId, messageIndex, size);

  const {
    publish,
    updatePublish,
    socketMessageList,
    setSocketMessageList,
    deleteSocketMessage,
    socketMessageDeleteList,
    setSocketMessageDeleteList,
    socketMessageUpdateList,
    setSocketMessageUpdateList,
  } = useSocketInit(roomId, workSpaceId, receiverId, 'direct');

  useChatBoxScroll(chatBoxRef, socketMessageList);

  useEffect(() => {
    const newDirectMessage = [
      ...directChatMessageList,
      ...totalMessageList.slice(0, pageSize),
    ];
    const uniqueMessageById = _.uniqBy(newDirectMessage, 'messageId');
    console.log(newDirectMessage, uniqueMessageById);
    setTotalMessageList((state) => [
      ...uniqueMessageById,
      ...state.slice(pageSize),
    ]);
  }, [directChatMessageList]);

  useEffect(() => {
    setTotalMessageList((state) =>
      _.uniqBy([...state, ...socketMessageList], 'messageId')
    );
  }, [socketMessageList]);

  useDeleteDirectChatMessage({
    socketMessageDeleteList,
    directChatMessageList,
    setSocketMessageList,
    setSocketMessageDeleteList,
  });

  useUpdateDirectChatMessage({
    socketMessageUpdateList,
    setSocketMessageList,
    directChatMessageList,
    setSocketMessageUpdateList,
  });

  // const loaderRef = useRef(null);
  // useEffect(() => {
  //   const observer = new IntersectionObserver();
  // }, []);

  const moreMessageButtonHandler = () => {
    ///  0 1 2 3 4 5
    const index = Math.floor(totalMessageList.length / 20);
    setMessageIndex(index);
  };
  return (
    <Box width="calc(100% - 410px)" px={'0.5rem'} display={'flex'}>
      <Box
        maxW={'65%'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.25rem'}
        height={'100%'}
        flex={5}
      >
        {
          <>
            <DirectChatHeader receiverName={receiverName} />
            <Box
              flexGrow={1}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'flex-start'}
              overflowY={'scroll'}
              height={'auto'}
              ref={chatBoxRef}
              css={{
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                  backgroundColor: '#FCFCFC',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  borderRadius: '10px',
                  backgroundColor: '#d6d6d6',
                },
              }}
            >
              <Flex justifyContent={'center'} pt={'1rem'} pb={'2rem'}>
                <Button onClick={moreMessageButtonHandler}>더보기</Button>
              </Flex>
              {!directChatMessageListIsLoading &&
                totalMessageList.map((body) => {
                  if (userId === body.senderId) {
                    return (
                      <MyText
                        key={body.messageId}
                        content={body.content}
                        deleteSocketMessage={deleteSocketMessage}
                        messageId={body.messageId}
                        isDeleted={body.isDeleted}
                        messageType={body.messageType}
                        updatePublish={updatePublish}
                      />
                    );
                  } else {
                    return (
                      <YourText
                        key={body.messageId}
                        content={body.content}
                        senderName={body.senderName}
                        deleteSocketMessage={deleteSocketMessage}
                        messageId={body.messageId}
                        isDeleted={body.isDeleted}
                        sendedTime={body.createdAt}
                      />
                    );
                  }
                })}
            </Box>
            <TextEditor publish={publish} channelId={chatRoomInfo.channelId} />
          </>
        }
      </Box>
      {!isExpand && <DirectChatBoard />}
    </Box>
  );
};

export default DirectChatPage;
