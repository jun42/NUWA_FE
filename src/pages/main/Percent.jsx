import styled from 'styled-components';
import { Flex, Text, Button, Box } from '@chakra-ui/react';
import StText from '@components/Text/StText';
import StTextDiv from '@components/Text/StText';
import { percent_section } from '@constants/selectPlan/SELECT_ALL_INFO';
import BackGroundImg from '@assets/blacklinear.png';
const Percent = () => {
  return (
    <StContainer>
      <PercentContainer>
        <Flex flexDirection={'column'} gap={'24px'}>
          <Text
            fontSize={{
              SE: '22px',
              sm: '24px',
              md: '26px',
              lg: '28px',
              xl: '32px',
              xxl: '40px',
            }}
            fontWeight={'700'}
            color={'white'}
          >
            크고 작은 팀들 모두 NUWA를 사용합니다
          </Text>
          <Text
            fontSize={18}
            fontWeight={500}
            color={'white'}
            className="landingPSubTitle"
          >
            NUWA는 세계 최대 규모의 기업들이 안전하게 협업할 수 있도록 지원을
            확대하고 있습니다
          </Text>
        </Flex>

        <Flex justify={'space-between'} className="percentText">
          {percent_section.map((item, index) => (
            <Flex
              flexDirection={{ SE: 'row', sm: 'column' }}
              textAlign={'center'}
              justify={'center'}
              align={'center'}
              key={index}
              whiteSpace={{ SE: 'none', sm: 'pre-line' }}
              gap={{ SE: '20px', md: '0px' }}
            >
              <Flex align={'center'}>
                <Text
                  fontSize={{
                    SE: '70px',
                    sm: '70px',
                    md: '80px',
                    lg: '80px',
                    xl: '90px',
                    xxl: '90px',
                  }}
                  color={'white'}
                >
                  {item.number}
                </Text>
                <Text
                  fontSize={{
                    SE: '50px',
                    sm: '50px',
                    md: '60px',
                    lg: '60px',
                    xl: '70px',
                    xxl: '70px',
                  }}
                  color={'white'}
                >
                  {item.percent}
                </Text>
              </Flex>
              <Text
                size={20}
                color={'white'}
                align={{ SE: 'left', sm: 'center' }}
              >
                {item.text}
              </Text>
            </Flex>
          ))}
        </Flex>

        <Flex
          width={'100%'}
          justify={{ SE: 'center', sm: 'flex-end' }}
          align={{ SE: 'center', sm: 'flex-end' }}
          gap={'12px'}
          className="percentBtns"
        >
          <Button
            borderRadius={'50px'}
            bg={'#D6D6D6'}
            _hover={{ bg: '#cfcece' }}
            _active={{ bg: '#cfcece' }}
            color={'#656565'}
            fontSize={{ SE: '14px', lg: '16px' }}
            width={'250px'}
            height={'auto'}
            fontWeight={'700'}
            padding={'16px 10px'}
          >
            NUWA FOR ENTERPRISE 소개
          </Button>
          <Button
            borderRadius={'50px'}
            bg={'#575DFB'}
            _hover={{ bg: '#575DFB' }}
            _active={{ bg: '#575DFB' }}
            color={'white'}
            fontSize={{ SE: '14px', lg: '16px' }}
            width={'250px'}
            height={'auto'}
            fontWeight={'700'}
            padding={'16px 10px'}
          >
            영업팀과 대화하기
          </Button>
        </Flex>
      </PercentContainer>
    </StContainer>
  );
};

export default Percent;

const StContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 12px;
  background: url(${BackGroundImg});
`;

const PercentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  margin: 0 auto;
  row-gap: 64px;
`;
