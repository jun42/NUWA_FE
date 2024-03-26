import styled, { keyframes } from 'styled-components';
import descriptionheaderImage from '@assets/descriptionheaderImage.png';
import white_logo from '@assets/white_logo.png';
import StTextDiv from '@components/Text/StTextDiv';
import StText from '@components/Text/StText';
import { Flex, Text, Image } from '@chakra-ui/react';
const FeatHeader = () => {
  return (
    <StContainer>
      <Flex flexDir={'column'} align={'center'} gap={'28px'}>
        <Flex
          p={'10px'}
          justify={'center'}
          align={'center'}
          gap={'10px'}
          flexDir={{ SE: 'column', sm: 'none' }}
        >
          <StImageBox>
            <img width={'181px'} height={'47px'} src={white_logo} alt="로고" />
          </StImageBox>

          <Text
            fontSize={{ SE: '22px', sm: '28px', md: '38px', lg: '42px' }}
            fontWeight={'700'}
            color={'white'}
          >
            미래의 업무가 이루어지는 곳
          </Text>
        </Flex>

        <Flex justify="center" align="center" flexDirection="center">
          <Text
            fontSize={{ SE: '12px', sm: '16px', md: '18px', lg: '20px' }}
            fontWeight="500"
            color="white"
            textAlign="center"
          >
            사람은 물론 업무에 필요한 모든 걸 한 곳에 집중시킴으로써
            <br />
            기존의 업무 방식을 완전히 바꿔 보새요.
          </Text>
        </Flex>
      </Flex>
    </StContainer>
  );
};

export default FeatHeader;

const StContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  background: url(${descriptionheaderImage});
  justify-content: center;
  align-items: center;
`;

const StImageBox = styled.div`
  @media (max-width: 479px) {
    width: 100px; // 화면 너비가 479px 이하일 때 너비를 100px로 조정
  }
`;
