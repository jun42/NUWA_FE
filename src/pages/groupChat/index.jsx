import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { uploadFile } from '../../apis/file/file';
import { useParams } from 'react-router-dom';
import useSocketInit from '../../apis/socket/useSocketInit';
import useGroupSocketInit from '../../apis/socket/group/useGroupSocketInit';
import TextEditor from '../../components/TextEditorFunctionalComponent/TextEditor';

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
  return (
    <Box>
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
      <TextEditor channelId={channelId} publish={publish} />
    </Box>
  );
};

export default GroupChatPage;
