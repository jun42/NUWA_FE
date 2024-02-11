import styled from 'styled-components';

const ServiceInquiryBtm = () => {
  return (
    <StContentBtm>
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

const StContentBtm = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 48px;
  border-top: 1px solid #00000010;
  gap: 24px;
`;
const StContentNHTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #575dfb;
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
const StContentNHRequestBtn = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 8px 22px;
  border-radius: 4px;
  background-color: #5158ff;
`;
