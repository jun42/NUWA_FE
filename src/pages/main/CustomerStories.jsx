import human_main from '@assets/human_main.png';
import styled from 'styled-components';
import { Flex, Text } from '@chakra-ui/react';
const CustomerStories = () => {
  return (
    <StContainer className="customerStory">
      <Flex
        justifyContent={'space-between'}
        padding={'100px 0px'}
        width={'1024px'}
      >
        <StImageBox>
          <img width={'300px'} height={'370px'} src={human_main} alt="" />
        </StImageBox>
        <Flex
          flexDirection={'column'}
          gap={'130px'}
          mt={{ SE: '20px', sm: '0px' }}
        >
          <Flex flexDirection={'column'} gap={{ SE: '5px', sm: '20px' }}>
            <Text
              fontSize={{
                SE: '20px',
                sm: '24px',
                md: '28px',
                lg: '32px',
                xl: '36px',
                xxl: '40px',
              }}
              fontWeight={'700'}
            >
              NUWA로 성과뿐만 아니라 직장 문화도 <br />
              개선하였습니다.
            </Text>
            <Text
              fontSize={{
                SE: '16px',
                sm: '16px',
                md: '20px',
                lg: '20px',
                xl: '24px',
                xxl: '24px',
              }}
              fontWeight={'700'}
              color={'#575DFB'}
            >
              보안과 생산성 측면에서 최고의 솔루션을 제공합니다.
            </Text>
          </Flex>

          <Text
            fontSize={{
              SE: '14px',
              sm: '14px',
              md: '16px',
              lg: '16px',
              xl: '20px',
              xxl: '20px',
            }}
            fontWeight={'500'}
            color={'#575DFB'}
          >
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
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
`;

const StImageBox = styled.div``;
