import { Avatar, Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { uploadFile } from '../../apis/file/file';
import { useParams } from 'react-router-dom';
import useSocketInit from '../../apis/socket/useSocketInit';
import useGroupSocketInit from '../../apis/socket/group/useGroupSocketInit';
import TextEditor from '../../components/TextEditorFunctionalComponent/TextEditor';
import GroupChatHeader from './GroupChatHeader';
import GroupMessageBox from './GroupMessageBox';

const GroupChatPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { workSpaceId, roomId, channelId } = useParams();

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

  console.log(socketMessageList);
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
        {socketMessageList.map((item) => {
          return (
            <GroupMessageBox
              key={item.messageId}
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
