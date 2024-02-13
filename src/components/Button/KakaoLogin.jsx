import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import StText from '@components/Text/StText';
import KaKaoLogo from '@assets/kakaoLogo.svg';

const KakaoLogin = () => {
  return (
    <Button
      borderRadius={'8px'}
      bg={'#FEE500'}
      _hover={{ bg: '#FAE000' }}
      _active={{ bg: '#F6DD00  ' }}
      width={'100%'}
      height={'52px'}
      onClick={() => {
        window.location.href = `${
          import.meta.env.VITE_SERVER_ADDRESS
        }/oauth2/authorization/kakao`;
      }}
    >
      <StLogoBox>
        <img src={KaKaoLogo} width={'20px'} alt="카카오 로고" />
        <StText $size={18} $weight={600} $color={'grey700'}>
          카카오 로그인
        </StText>
      </StLogoBox>
    </Button>
  );
};

export default KakaoLogin;
const StLogoBox = styled.div`
  display: flex;
  gap: 8px;
`;
