import StTextDiv from '@components/Text/StTextDiv';
import styled from 'styled-components';
import Logo from '@components/Image/Logo';

const PageTitle = () => {
  return (
    <StTitle>
      <Logo width={'120px'} height={'30px'} />
      <StTextDiv $size={32} $weight={700} $color="primary400">
        구독 및 결제
      </StTextDiv>
    </StTitle>
  );
};

export default PageTitle;

const StTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0 auto;
`;
