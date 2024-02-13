import styled from 'styled-components';
import SocialLogin from './SocialLogin';
import { Divider } from '@chakra-ui/react';
import LoginForm from './LoginForm';

const Main = () => {
  return (
    <StContainer>
      <LoginForm />
      <Divider borderColor={'grey.200'} />
      <SocialLogin />
    </StContainer>
  );
};

export default Main;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// const StInput = styled.input`
//   width: 100%;
//   height: 52px;
//   border-radius: 8px;
// `;
