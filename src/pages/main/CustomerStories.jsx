import human_main from '@assets/human_main.png';
import styled from 'styled-components';
import { Flex, Text } from '@chakra-ui/react';
const CustomerStories = () => {
  return (
    <StContainer className='customerStory'>
      <Flex justifyContent={'space-between'} padding={'100px 0px'} width={'1024px'}>
        <img width={'300px'} height={'370px'} src={human_main} alt="" />

        <Flex flexDirection={'column'} gap={'130px'}>
          <Flex flexDirection={'column'} gap={'20px'}>
            <Text fontSize={'40px'} fontWeight={'700'} className='landingPTitle'>
              NUWA로 성과뿐만 아니라 직장 문화도 <br />
              개선하였습니다.
            </Text>
            <Text fontSize={'24px'} fontWeight={'700'} color={'#575DFB'} className='landingPSubTitle'>
              보안과 생산성 측면에서 최고의 솔루션을 제공합니다.
            </Text>
          </Flex>

          <Text fontSize={'20px'} fontWeight={'500'} color={'#575DFB'}>
            더 많은 고객 사례보기
          </Text>
        </Flex>
      </Flex>
    </StContainer>
  );
};

export default CustomerStories;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #f8f9fb;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
`;
