import { Box, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { uploadFile } from '@apis/file/file';
import { useLoaderData, useParams } from 'react-router-dom';
import useGroupSocketInit from '@apis/socket/group/useGroupSocketInit';
import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';
import GroupChatHeader from './GroupChatHeader';
import GroupMessageBox from './GroupMessageBox';
import { useGroupChatMessageQuery } from '@queries/groupChat.js/useGroupChatMessage';
import { getGroupChatMessage, joinInGroupChat } from '@apis/chat/groupChat';
import useChatBoxScroll from '@hooks/directChat/useChatBoxScroll';
import useChatBoxScrollToBottom from '@hooks/directChat/useChatBoxScrollToBottom';

const GroupChatPage = () => {
  const chatBoxRef = useRef();
  const { userProfile } = useLoaderData();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { workSpaceId, roomId, channelId } = useParams();
  let totalMessageList = [];

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const {
    publish,
    socketMessageList,
    setSocketMessageList,
    deleteSocketMessage,
    socketMessageDeleteList,
    setSocketMessageDeleteList,
  } = useGroupSocketInit(roomId, workSpaceId, 'chat');
  const {
    data: groupChatMessageList,
    isFetching,
    isSuccess,
  } = useGroupChatMessageQuery(roomId);
  useChatBoxScrollToBottom(chatBoxRef, groupChatMessageList);

  totalMessageList = [...groupChatMessageList, ...socketMessageList];

  useChatBoxScroll(chatBoxRef, socketMessageList);
  return (
    <Box
      width={'calc(100% - 400px)'}
      display={'flex'}
      flexDirection={'column'}
      px={'1rem'}
      gap={'0.75rem'}
    >
      <div>
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
        <Button
          onClick={() => {
            joinInGroupChat(channelId, [userProfile.id]);
          }}
        >
          채팅에 참여하기
        </Button>
      </div>
      <GroupChatHeader />
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
        {!isFetching &&
          totalMessageList.map((item) => {
            return (
              <GroupMessageBox
                key={item.messageId}
                createdAt={item.createdAt}
                messageId={item.messageId}
                senderName={item.senderName}
                content={item.content}
              />
            );
          })}
      </Box>
      <TextEditor channelId={channelId} publish={publish} />
    </Box>
  );
};

export default GroupChatPage;
