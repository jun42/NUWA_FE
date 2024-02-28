import styled from 'styled-components';
import TitleText from './TitleText';
import FAQBox from './FAQBox';

const index = () => {
  return (
    <StContainer>
      <TitleText />
      <FAQBox />
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
  padding: 80px 12px;
  gap: 50px;
  min-height: 80vh;
  margin: 0 auto;
`;
