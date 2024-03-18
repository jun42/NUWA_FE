import Logo from '@components/Image/Logo';
import styled from 'styled-components';
import StTextDiv from '@components/Text/StTextDiv';
import StText from '@components/Text/StText';
import { Button, Center, Flex } from '@chakra-ui/react';
const FreeTrial = () => {
  return (
    <StContainer>
      <Flex align="center" justify="center" className='FreeTrialText'>
        <Logo width={'150px'} height={'48px'} />
        <StTextDiv $size={42} $weight={700}>
          에서 <StText $color={'primary400'}>무료 회원가입</StText>
        </StTextDiv>
      </Flex>
      <StTextDiv $size={26} $weight={700} $textAlign={Center}>
        팀 협업에 사용해보세요. 이메일보다 빠르고 안전하게 무료로 사용해보기
      </StTextDiv>

      <Button
        marginTop="83px"
        borderRadius={'25px'}
        bg={'#575DFB'}
        _hover={{ bg: '#5055f3' }}
        _active={{ bg: '#5359f6' }}
        width={'250px'}
        height={'65px'}
        bgColor={'primary400'}
        color={'white'}
        fontSize={'24px'}
        fontWeight={'700'}
      >
        무료체험
      </Button>
    </StContainer>
  );
};

export default FreeTrial;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 12px;
  background-color: #f1f4f9;
`;
