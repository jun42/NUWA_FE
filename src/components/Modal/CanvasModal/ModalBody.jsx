import React, { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';
import styled from 'styled-components';
import CanvasTextEditor from '@components/CanvasEditor/CanvasTextEditor.jsx';
import { createCanvas } from '@apis/canvas/postCanvas.js';
import { useParams } from 'react-router-dom';

const ModalBody = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { workSpaceId } = useParams(); // useParams 사용

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (newContent) => {
    // 텍스트만 추출하기
    setContent(newContent.ops.map((op) => op.insert).join(''));
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    try {
      const response = await createCanvas(workSpaceId, title, content);
      if (response.success) {
        alert('캔버스가 성공적으로 생성되었습니다.');
        onClose();
      } else {
        alert(`캔버스 생성 실패: ${response.message}`);
      }
    } catch (error) {
      console.error(error);
      alert('캔버스 생성 중 오류가 발생했습니다.');
    }
  };

  return (
    <StContainer>
      <Input
        placeholder="제목을 입력하세요"
        value={title}
        onChange={handleTitleChange}
      />
      <CanvasTextEditor onContentChange={handleContentChange} />
      <Button onClick={handleSubmit}>캔버스를 백엔드에게 전송하기</Button>
    </StContainer>
  );
};

export default ModalBody;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
`;
