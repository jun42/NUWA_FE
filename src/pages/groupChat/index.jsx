import { Box, Button, Flex } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { uploadFile } from '@apis/file/file';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useGroupSocketInit from '@apis/socket/group/useGroupSocketInit';
import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';
import GroupChatHeader from './GroupChatHeader';
import GroupMessageBox from './GroupMessageBox';
import { useGroupChatMessageQuery } from '@queries/groupChat.js/useGroupChatMessage';
import { getGroupChatMessage, joinInGroupChat } from '@apis/chat/groupChat';
import useChatBoxScroll from '@hooks/directChat/useChatBoxScroll';
import useChatBoxScrollToBottom from '@hooks/directChat/useChatBoxScrollToBottom';

const GroupChatPage = () => {
  const navigate = useNavigate();
  const chatBoxRef = useRef();
  const { userProfile, chatRoomInfo, isGroupMember } = useLoaderData();
  const channelId = chatRoomInfo.channelId;
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { workSpaceId, roomId } = useParams();
  let totalMessageList = [];

  if (!isGroupMember) {
    navigate(`/workspace/${workSpaceId}`);
  }

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

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
  } = useGroupSocketInit(roomId, workSpaceId, 'chat');
  const {
    data: groupChatMessageList,
    isFetching,
    isSuccess,
  } = useGroupChatMessageQuery(roomId);
  useChatBoxScrollToBottom(chatBoxRef, groupChatMessageList);

  totalMessageList = [...groupChatMessageList, ...socketMessageList];

  useEffect(() => {
    if (socketMessageDeleteList.length !== 0) {
      setSocketMessageList((state) => {
        const newState = [...state];
        for (let deleteItem of socketMessageDeleteList) {
          newState.forEach((item) => {
            if (item.messageId === deleteItem.id) {
              item.messageId = item.messageId + 'delete';
              item.isDeleted = true;
              item.content = deleteItem.content;
            }
            return item;
          });
        }
        return newState;
      });
      if (groupChatMessageList.length > 0) {
        for (let deleteItem of socketMessageDeleteList) {
          groupChatMessageList.forEach((item) => {
            if (item.messageId === deleteItem.id) {
              item.messageId = item.messageId + 'delete';

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
              item.messageId = item.messageId + 'update';
              item.content = updateItem.content;
            }
            return item;
          });
        }
        return newState;
      });
      if (groupChatMessageList.length > 0) {
        for (let updateItem of socketMessageUpdateList) {
          groupChatMessageList.forEach((item) => {
            if (item.messageId === updateItem.id) {
              item.messageId = item.messageId + 'update';
              item.content = updateItem.content;
            }
            return item;
          });
        }
      }

      setSocketMessageUpdateList([]);
    }
  }, [socketMessageUpdateList]);

  useChatBoxScroll(chatBoxRef, socketMessageList);
  return (
    <Box
      width={'calc(100% - 400px)'}
      display={'flex'}
      flexDirection={'column'}
      px={'1rem'}
      gap={'0.75rem'}
    >
      {/* <div>
        <input
          type="file"
          multiple
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
        <Button
          onClick={() => {
            const fileRequestDto = {
              workSpaceId,
            };
            const formData = new FormData();
            formData.append(
              'fileRequestDto',
              new Blob([JSON.stringify(fileRequestDto)], {
                type: 'application/json',
              })
            );
            for (let file of selectedFiles) {
              formData.append('fileList', file);
            }
            uploadFile('CHAT', channelId, formData);
          }}
        >
          업로드
        </Button>
      </div> */}
      <GroupChatHeader
        channelName={chatRoomInfo.channelName}
        channelId={channelId}
      />
      <Box
        ref={chatBoxRef}
        flexGrow={1}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        gap={'0.5rem'}
        overflowY={'scroll'}
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
        {isGroupMember &&
          !isFetching &&
          totalMessageList.map((item) => {
            return (
              <GroupMessageBox
                key={item.messageId}
                createdAt={item.createdAt}
                messageId={item.messageId}
                senderName={item.senderName}
                content={item.content}
                isDeleted={item.isDeleted}
                messageType={item.messageType}
                deleteSocketMessage={deleteSocketMessage}
                updatePublish={updatePublish}
                // setReadOnly,
              />
            );
          })}
      </Box>

      {isGroupMember ? (
        <TextEditor channelId={channelId} publish={publish} />
      ) : (
        <Box position={'relative'}>
          <Box>
            <TextEditor channelId={channelId} publish={publish} />
          </Box>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            position={'absolute'}
            bg={'rgba(0,0,0,0.5)'}
            width={'100%'}
            height={'100%'}
            top={0}
            rounded={'lg'}
          >
            {/* <Button
              colorScheme="secondary"
              onClick={() => {
                joinInGroupChat(channelId, [userProfile.id]).then((r) => {
                  navigate(`/workspace/${workSpaceId}/groupChat/${roomId}/`);
                });
              }}
            >
              채널에 참여하기
            </Button> */}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default GroupChatPage;
