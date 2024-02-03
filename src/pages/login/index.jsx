import styled from 'styled-components';
import Main from './Main';
import WelcomeHeader from '@components/Header/WelcomeHeader';
const LoginPage = () => {
  return (
    <StContainer>
      <WelcomeHeader />
      <Main />
    </StContainer>
  );
};

export default LoginPage;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 630px;
  height: 550px;
  gap: 3.75rem;
  background-color: #f1f4f9;
  margin: 1rem;
  padding: 1rem;
`;

// #ffffff   #fafbfd    #f6f8fb             #f1f4f9
