import styled from 'styled-components';
import StText from '@components/Text/StText';
import Logo from '@components/Image/Logo';
import { Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <StHeaderContainer>
      <Flex gap={'0.25rem'} alignItems={'center'}>
        <div>
          <Logo width={'115px'} height={'30px'} />
        </div>
        <StText $size={32} $weight={700} $color={'grey700'}>
          에 오신 것을
        </StText>
      </Flex>
      <StText $size={32} $weight={700} $color={'primary400'}>
        환영합니다.
      </StText>
    </StHeaderContainer>
  );
};

export default Header;

const StHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
