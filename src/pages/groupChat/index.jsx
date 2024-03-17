import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { uploadFile } from '@apis/file/file';
import { useLoaderData, useParams } from 'react-router-dom';
import useGroupSocketInit from '@apis/socket/group/useGroupSocketInit';
import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';
import GroupChatHeader from './GroupChatHeader';
import GroupMessageBox from './GroupMessageBox';
import { useGroupChatMessageQuery } from '@queries/groupChat.js/useGroupChatMessage';
import { getGroupChatMessage, joinInGroupChat } from '@apis/chat/groupChat';

const GroupChatPage = () => {
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

  totalMessageList = [...groupChatMessageList, ...socketMessageList];

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
        flexGrow={1}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-end'}
        gap={'0.5rem'}
        overflowY={'scroll'}
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
