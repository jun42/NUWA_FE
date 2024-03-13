import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useLoaderData, useParams } from 'react-router-dom';

import DirectChatHeader from './DirectChatHeader';
import MyText from './MyText';
import YourText from './YourText';
import useSocketInit from './useSocketInit';

import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';

import { useDirectChatMessageListQuery } from '@queries/workSpace/directChatMessageList';

import useChatBoxScroll from '@hooks/directChat/useChatBoxScroll';
import useChatBoxScrollToBottom from '@hooks/directChat/useChatBoxScrollToBottom';
//todo api 에러 핸들링시 페이지 안깨지도록
const DirectChatPage = () => {
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
    socketMessageList,
    setSocketMessageList,
    deleteSocketMessage,
    socketMessageDeleteList,
    setSocketMessageDeleteList,
  } = useSocketInit(roomId, workSpaceId, receiverId);
  useChatBoxScroll(chatBoxRef, socketMessageList);

  totalMessageList = [...directChatMessageList, ...socketMessageList];
  // 서로 다른 뷰 까지 고려해야함
  // list말고 해시맵 고려한다면..
  useEffect(() => {
    if (socketMessageDeleteList.length !== 0) {
      setSocketMessageList((state) => {
        const newState = [...state];
        for (let deleteItem of socketMessageDeleteList) {
          newState.forEach((item) => {
            if (item.messageId === deleteItem.id) {
              item.createdAt = item.createdAt + 'a';
              item.isDeleted = true;
              item.content = deleteItem.content;
            }
            return item;
          });
        }
        console.log(newState);
        return newState;
      });

      setSocketMessageDeleteList([]);
    }
  }, [socketMessageDeleteList, setSocketMessageDeleteList]);

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
              totalMessageList.map((body) => {
                if (userId === body.senderId) {
                  return (
                    <MyText
                      key={body.createdAt}
                      content={body.content}
                      deleteSocketMessage={deleteSocketMessage}
                      messageId={body.messageId}
                      isDeleted={body.isDeleted}
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

            {/* {!directChatMessageListIsLoading &&
              directChatMessageList.map((body) => {
                if (userId === body.senderId) {
                  return (
                    <MyText
                      key={body.createdAt}
                      content={body.content}
                      deleteSocketMessage={deleteSocketMessage}
                      messageId={body.messageId}
                      isDeleted={body.isDeleted}
                    />
                  );
                } else {
                  return (
                    <YourText
                      key={body.createdAt}
                      content={body.content}
                      senderName={body.senderName}
                    />
                  );
                }
              })} */}
            {/* socket message view */}
            {/* {socketMessageList.map((body) => {
              if (userId === body.senderId) {
                return (
                  <MyText
                    key={body.createdAt}
                    content={body.content}
                    deleteSocketMessage={deleteSocketMessage}
                    messageId={body.messageId}
                  />
                );
              } else {
                return (
                  <YourText
                    key={body.createdAt}
                    content={body.content}
                    senderName={body.senderName}
                  />
                );
              }
            })} */}
          </Box>
          <TextEditor publish={publish} channelId={chatRoomInfo.channelId} />
        </>
      }
    </Box>
  );
};

export default DirectChatPage;
