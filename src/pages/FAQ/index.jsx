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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 200px 300px;
  gap: 50px;
`;
