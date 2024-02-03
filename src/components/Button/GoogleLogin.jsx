import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import StText from '@components/Text/StText';
import GoogleLogo from '@assets/googleLogo.svg';

const GoogleLogin = () => {
  return (
    <Button
      borderRadius={'8px'}
      bg={'#fff'}
      _hover={{ bg: '#fafbfd' }}
      _active={{ bg: '#f6f8fb  ' }}
      width={'100%'}
      height={'52px'}
    >
      <StLogoBox>
        <img src={GoogleLogo} alt="네이버 로고" />
        <StText $size={16} $weight={600} $color={'grey700'}>
          Google로 계정 생성
        </StText>
      </StLogoBox>
    </Button>
  );
};

export default GoogleLogin;
const StLogoBox = styled.div`
  display: flex;
  gap: 8px;
`;
