import StTextDiv from '@components/Text/StTextDiv';
import LogoSrc from '@assets/logo.png';
import styled from 'styled-components';

const PageTitle = () => {
  return (
    <StTitle>
      <StLogo src={LogoSrc} width={'120px'} height={'30px'} />
      <StTextDiv $size={32} $weight={700} $color="primary400">
        구독 및 결제
      </StTextDiv>
    </StTitle>
  );
};

export default PageTitle;

const StLogo = styled.img``;

const StTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
