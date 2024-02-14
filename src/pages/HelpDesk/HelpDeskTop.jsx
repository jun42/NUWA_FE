import styled from 'styled-components';
import Logo from '@components/Image/Logo';
import StTextDiv from '@components/Text/StTextDiv';

const HelpDeskTop = () => {
  return (
    <StContentTop>
      <StContentText>
        <StContentTextTitle>
          <Logo width={'120px'} height={'30px'} />
          <StTextDiv $size={32} $weight={700} $color="primary400">
            서비스문의
          </StTextDiv>
        </StContentTextTitle>

        <StContentTextDesc>
          건의사항이나 불편사항을{' '}
          <StContentTextDescLink>NUWA에게 문의</StContentTextDescLink>해주세요.
        </StContentTextDesc>
      </StContentText>

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
    </StContentTop>
  );
};

export default HelpDeskTop;

const StContentTop = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 72px;
`;

const StContentText = styled.div`
  display: flex;
  flex-flow: column;
`;

const StContentTextTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const StContentTextDesc = styled.p`
  font-weight: 500;
`;

const StContentTextDescLink = styled.p`
  color: #575dfb;
  text-decoration: underline;
`;

const StContentBtns = styled.div`
  display: flex;
  flex-flow: wrap;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const StContentBtn = styled.a`
  display: inline-block;
  padding: 6px 18px;
  border: 1px solid #66666650;
  border-radius: 50px;
  background-color: #fff;
  color: #666;
`;
