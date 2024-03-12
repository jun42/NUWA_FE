import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

const helpdesk_tilte = [
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
  return (
    <StContentBtm>
      <Flex justify={'center'}>
        <StContentBtns>
          <StContentBtn>주제</StContentBtn>
          <StContentBtn>오디오</StContentBtn>
          <StContentBtn>서비스 관리</StContentBtn>
          <StContentBtn>청구 및 플랜</StContentBtn>
          <StContentBtn>연결 문제</StContentBtn>
          <StContentBtn>채널</StContentBtn>
          <StContentBtn>알림</StContentBtn>
          <StContentBtn>이벤트</StContentBtn>
          <StContentBtn>모바일 서비스</StContentBtn>
          <StContentBtn>서비스 관리</StContentBtn>
          <StContentBtn>청구 및 플랜</StContentBtn>
          <StContentBtn>오디오 및 비디오</StContentBtn>
        </StContentBtns>
      </Flex>
      <StContentNHTitle>도움이 필요하신가요?</StContentNHTitle>
      <StContentNHContent>
        <StContentNHTextarea>@ 내용</StContentNHTextarea>
        <StContentNHBtns>
          <StContentNHInsertFile>파일 첨부하기</StContentNHInsertFile>
          <StContentNHRequestBtn>문의하기</StContentNHRequestBtn>
        </StContentNHBtns>
      </StContentNHContent>
    </StContentBtm>
  );
};

export default ServiceInquiryBtm;

const StContentBtm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 24px;
`;
const StContentNHTitle = styled.p`
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
const StContentNHInsertFile = styled.a`
  color: #575dfb;
  text-decoration: none;
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
  background-color: #fff;
  color: #666;
`;
