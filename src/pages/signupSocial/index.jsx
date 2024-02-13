import styled from 'styled-components';
import WelcomeHeader from '@components/Header/WelcomeHeader';
import Main from './Main';

const SignupSocialPage = () => {
  return (
    <StContainer>
      <WelcomeHeader />
      <Main />
    </StContainer>
  );
};

export default SignupSocialPage;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 630px;
  height: 120vh;
  gap: 2.5rem;
  background-color: #f1f4f9;
  margin: 1rem;
  padding: 1rem;
`;
