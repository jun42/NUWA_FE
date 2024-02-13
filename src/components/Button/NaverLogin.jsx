import { Button } from '@chakra-ui/react';
import StText from '@components/Text/StText';

import NaverLogo from '@assets/naverLogo.svg';
import styled from 'styled-components';

const NaverLogin = () => {
  return (
    <Button
      borderRadius={'8px'}
      bg={'#03C75A'}
      _hover={{ bg: '#02b74a' }}
      _active={{ bg: '#01a73a' }}
      width={'100%'}
      height={'52px'}
      onClick={() => {
        window.location.href = `${
          import.meta.env.VITE_SERVER_ADDRESS
        }/oauth2/authorization/naver`;
      }}
    >
      <StLogoBox>
        <img src={NaverLogo} alt="네이버 로고" />
        <StText $size={18} $weight={600} $color={'grey100'}>
          네이버 로그인
        </StText>
      </StLogoBox>
    </Button>
  );
};

export default NaverLogin;

const StLogoBox = styled.div`
  display: flex;
  gap: 8px;
`;
