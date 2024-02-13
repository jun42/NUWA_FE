import { Divider } from '@chakra-ui/react';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';
import SocialLogin from './SocialLogin';

const Main = () => {
  return (
    <StContainer>
      <SignUpForm />
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
