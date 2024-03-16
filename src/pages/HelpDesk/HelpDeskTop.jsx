import styled from 'styled-components';
import Logo from '@components/Image/Logo';
import StTextDiv from '@components/Text/StTextDiv';
import useAuthGuard from '../../hooks/auth/useAuthGuard';

const HelpDeskTop = () => {
  useAuthGuard();
  return (
    <StContentTop>
      <StContentText>
        <StContentTextTitle>
          <StTextDiv $size={32} $weight={700} $color="primary400">
            서비스문의
          </StTextDiv>
        </StContentTextTitle>

        <StContentTextDesc>
          건의사항이나 불편사항을{' '}
          <StContentTextDescLink>NUWA에게 문의해주세요.</StContentTextDescLink>
        </StContentTextDesc>
      </StContentText>
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

const StContentTextDesc = styled.div`
  font-weight: 500;
`;

const StContentTextDescLink = styled.div`
  color: #575dfb;
  text-decoration: underline;
`;
