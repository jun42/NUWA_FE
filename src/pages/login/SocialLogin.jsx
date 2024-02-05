import styled from 'styled-components';
import ToSignUp from './ToSignUp';
// import GoogleLogin from '@components/Button/GoogleLogin';
import NaverLogin from '@components/Button/NaverLogin';
import KakaoLogin from '@components/Button/KakaoLogin';

const SocialLogin = () => {
  return (
    <StButtonBox>
      {/* <GoogleLogin /> */}
      <NaverLogin />
      <KakaoLogin />
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
