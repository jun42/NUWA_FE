import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { uploadFile } from '../../apis/file/file';
import { useParams } from 'react-router-dom';

const GroupChatPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { workSpaceId, channelId } = useParams();

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };
  return (
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
  );
};

export default GroupChatPage;
