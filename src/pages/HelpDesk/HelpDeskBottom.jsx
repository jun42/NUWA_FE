import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { sendHelpDeskMail } from '@apis/inquiry/helpdesk.js';
const helpdesk_title = [
  '주제',
  '오디오',
  '서비스',
  '청구 및 플랜',
  '연결 문제',
  '채널',
  '알림',
  '이벤트',
  '모바일 서비스',
  '서비스 관리',
  '청구 및 플랜',
  '오디오 및 비디오',
];

const ServiceInquiryBtm = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [fileName, setFileName] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const mutation = useMutation({
    mutationFn: (data) => sendHelpDeskMail(data.emailData, data.files),
    onSuccess: () => {
      alert('도입문의 메일이 성공적으로 발송되었습니다.');
    },
    onError: (error) => {
      alert('메일 발송에 실패했습니다. 다시 시도해 주세요.');
      console.error('메일 발송 실패:', error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedButton !== null && content && file) {
      const emailData = {
        subject: helpdesk_title[selectedButton],
        email: 'testUser@test.com',
        content: content,
      };

      // Mutation 실행
      mutation.mutate({ emailData, files: [file] });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
    }
  };

  return (
    <StContentBtm onSubmit={handleSubmit}>
      <Flex justify={'center'}>
        <StContentBtns>
          {helpdesk_title.map((title, index) => (
            <StContentBtn
              type="button"
              key={index}
              $isSelected={selectedButton === index}
              onClick={() => setSelectedButton(index)}
            >
              {title}
            </StContentBtn>
          ))}
        </StContentBtns>
      </Flex>
      <StContentNHTitle>도움이 필요하신가요?</StContentNHTitle>
      <StContentNHContent>
        <StContentNHTextarea
          placeholder="문의사항을 작성해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <StContentNHBtns>
          <FileUploadLabel htmlFor="file-upload">
            파일 첨부하기
            <FileInput
              id="file-upload"
              type="file"
              onChange={handleFileChange}
            />
          </FileUploadLabel>
          {fileName && <FileName>첨부된 파일명: {fileName}</FileName>}
          <StContentNHRequestBtn type="submit">문의하기</StContentNHRequestBtn>
        </StContentNHBtns>
      </StContentNHContent>
    </StContentBtm>
  );
};

export default ServiceInquiryBtm;

// Styled-components

const StContentBtm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 24px;
`;

const StContentNHTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #575dfb;
  border-top: 1px solid #00000010;
  padding-top: 48px;
`;

const StContentNHContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;
`;

const StContentNHTextarea = styled.textarea`
  height: 110px;
  width: 100%;
  border-radius: 8px;
  border-color: #00000010;
  padding: 16px;
`;

const StContentNHBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StContentNHRequestBtn = styled.button`
  text-decoration: none;
  color: #fff;
  padding: 8px 22px;
  border-radius: 4px;
  background-color: #5158ff;
`;

const StContentBtns = styled.div`
  display: flex;
  flex-flow: wrap;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const StContentBtn = styled.button`
  display: inline-block;
  padding: 6px 18px;
  border: 1px solid #66666650;
  border-radius: 50px;
  background-color: ${({ $isSelected }) => ($isSelected ? '#6F42C1' : '#fff')};
  color: ${({ $isSelected }) => ($isSelected ? '#fff' : '#666')};
`;

const FileUploadLabel = styled.label`
  color: #575dfb;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const FileName = styled.span`
  margin-left: 10px;
`;

const FileInput = styled.input`
  display: none;
`;
