import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
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
//todo api 에러 핸들링시 페이지 안깨지도록
const DirectChatPage = () => {
  const { isDirectChatBoxExpand: isExpand } = useBoundStore();

  const { chatRoomInfo, userProfile } = useLoaderData();
  const { roomId, workSpaceId } = useParams();
  let totalMessageList = [];

  // define receiver
  let userId = userProfile?.id;
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

  totalMessageList = [...directChatMessageList, ...socketMessageList];
  // 서로 다른 뷰 까지 고려해야함
  useEffect(() => {
    if (socketMessageDeleteList.length !== 0) {
      setSocketMessageList((state) => {
        const newState = [...state];
        for (let deleteItem of socketMessageDeleteList) {
          newState.forEach((item) => {
            if (item.messageId === deleteItem.id) {
              item.createdAt = item.createdAt + 'delete';
              item.isDeleted = true;
              item.content = deleteItem.content;
            }
            return item;
          });
        }
        return newState;
      });
      if (directChatMessageList.length > 0) {
        for (let deleteItem of socketMessageDeleteList) {
          directChatMessageList.forEach((item) => {
            if (item.messageId === deleteItem.id) {
              item.createdAt = item.createdAt + 'delete';
              item.isDeleted = true;
              item.content = deleteItem.content;
            }
            return item;
          });
        }
      }

      setSocketMessageDeleteList([]);
    }
  }, [socketMessageDeleteList, setSocketMessageDeleteList]);

  useEffect(() => {
    if (socketMessageUpdateList.length !== 0) {
      setSocketMessageList((state) => {
        const newState = [...state];
        for (let updateItem of socketMessageUpdateList) {
          newState.forEach((item) => {
            if (item.messageId === updateItem.id) {
              item.createdAt = item.createdAt + 'update';
              item.content = updateItem.content;
            }
            return item;
          });
        }
        return newState;
      });
      if (directChatMessageList.length > 0) {
        for (let updateItem of socketMessageUpdateList) {
          directChatMessageList.forEach((item) => {
            if (item.messageId === updateItem.id) {
              item.createdAt = item.createdAt + 'update';
              item.content = updateItem.content;
            }
            return item;
          });
        }
      }

      setSocketMessageUpdateList([]);
    }
  }, [socketMessageUpdateList]);
  return (
    <Box width="calc(100% - 410px)" px={'0.5rem'} display={'flex'}>
      <Box
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
              {!directChatMessageListIsLoading &&
                totalMessageList.map((body) => {
                  if (userId === body.senderId) {
                    return (
                      <MyText
                        key={body.createdAt}
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
                        key={body.createdAt}
                        content={body.content}
                        senderName={body.senderName}
                        deleteSocketMessage={deleteSocketMessage}
                        messageId={body.messageId}
                        isDeleted={body.isDeleted}
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
