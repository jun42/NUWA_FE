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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 200px 300px;
  gap: 50px;
`;
