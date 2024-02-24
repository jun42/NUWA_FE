import styled from 'styled-components';
import TitleText from './TitleText';
import InputSection from './InputSection';
const index = () => {
  return (
    <StContainer>
      <TitleText />
      <InputSection />
    </StContainer>
  );
};

export default index;

const StContainer = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 64px 12px;
  gap: 50px;
  margin: 0 auto;
`;
