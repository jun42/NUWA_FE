import styled from 'styled-components';
import GoogleLogin from './GoogleLogin';
import NaverLogin from './NaverLogin';
import ToSignUp from './ToSignUp';

const SocialLogin = () => {
  return (
    <StButtonBox>
      <GoogleLogin />
      <NaverLogin />
      <ToSignUp />
    </StButtonBox>
  );
};

export default SocialLogin;

const StButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
