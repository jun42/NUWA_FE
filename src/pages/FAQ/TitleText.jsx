import styled from 'styled-components';
import StTextDiv from '@components/Text/StTextDiv';
import Logo from '@components/Image/Logo';

const TitleText = () => {
  return (
    <StTitle>
      <Logo width={'140px'} height={'36px'} />
      <StTextDiv $size={42} $weight={700} $color="primary400">
        자주하는 질문
      </StTextDiv>
    </StTitle>
  );
};

export default TitleText;

const StTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
`;
