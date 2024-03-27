import Logo from '@components/Image/Logo';
import styled from 'styled-components';
import StTextDiv from '@components/Text/StTextDiv';
import StText from '@components/Text/StText';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { getToken } from '../../utils/auth';
const FreeTrial = () => {
  const navigate = useNavigate();
  const accessToken = getToken();
  return (
    <StContainer>
      <Flex
        align="center"
        justify="center"
        className="FreeTrialText"
        gap={'10px'}
      >
        <StImageBox>
          <Logo width={'150px'} height={'48px'} />
        </StImageBox>
        <Text
          fontSize={{ SE: '22px', sm: '28px', md: '38px', lg: '42px' }}
          fontWeight={'700'}
        >
          무료 회원가입
        </Text>
      </Flex>
      <Text
        fontSize={{ SE: '14px', sm: '18px', md: '22px', lg: '26px' }}
        fontWeight={'700'}
        textAlign={{ SE: 'center' }}
        color={'#a1a1a1'}
        mt={{ SE: '10px' }}
      >
        팀 협업에 사용해보세요. 이메일 보다 빠르고 안전하며 다양한 기능으로
        팀원과 협업해보세요 전보다 빠른 생산성과 편의성을 제공 해드립니다
      </Text>

      <Button
        marginTop="83px"
        borderRadius={'25px'}
        bg={'#575DFB'}
        _hover={{ bg: '#5055f3' }}
        _active={{ bg: '#5359f6' }}
        width={{ SE: '200px', sm: '210px', md: '230px', lg: '250px' }}
        height={{ SE: '35px', sm: '45px', md: '55px', lg: '65px' }}
        bgColor={'primary400'}
        color={'white'}
        fontSize={{ SE: '14px', sm: '16px', md: '20px', lg: '24px' }}
        fontWeight={'700'}
        onClick={() => {
          if (accessToken) {
            navigate('/workAccess');
          } else {
            navigate('/login');
          }
        }}
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

const StImageBox = styled.div`
  @media (max-width: 479px) {
    width: 100px; // 화면 너비가 479px 이하일 때 너비를 100px로 조정
  }
`;
