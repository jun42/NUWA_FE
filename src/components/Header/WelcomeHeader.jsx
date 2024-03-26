import styled from 'styled-components';
import StText from '@components/Text/StText';
import Logo from '@components/Image/Logo';
import { Flex, Text } from '@chakra-ui/react';

const WelcomeHeader = () => {
  return (
    <StHeaderContainer>
      <Flex gap={'0.25rem'} alignItems={'center'}>
        <StImageBox>
          <Logo width={'115px'} height={'30px'} />
        </StImageBox>
        <Text
          fontSize={{ SE: '24px', sm: '32px' }}
          fontWeight={'700'}
          color={'grey700'}
        >
          에 오신 것을
        </Text>
      </Flex>
      <Text
        fontSize={{ SE: '24px', sm: '32px' }}
        fontWeight={'700'}
        color={'#575dfb'}
      >
        환영합니다.
      </Text>
    </StHeaderContainer>
  );
};

export default WelcomeHeader;

const StHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StImageBox = styled.div`
  @media (max-width: 479px) {
    width: 100px;
    height: 28px;
  }
`;
