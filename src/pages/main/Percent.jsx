import styled from 'styled-components';
import { Flex, Text, Button } from '@chakra-ui/react';
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
            fontSize={'40px'}
            fontWeight={'700'}
            color={'white'}
            className="landingPTitle"
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

        <Flex justifyContent={'space-between'} className="percentText">
          {percent_section.map((item, index) => (
            <Flex
              flexDirection={'column'}
              textAlign={'center'}
              justify={'center'}
              align={'center'}
              key={index}
              whiteSpace={'pre-line'}
            >
              <StTextDiv $size={90} $color={'white'}>
                {item.number}
                <StText $size={70} $color={'white'}>
                  {item.percent}
                </StText>
              </StTextDiv>

              <StText $size={20} $color={'white'}>
                {item.text}
              </StText>
            </Flex>
          ))}
        </Flex>

        <Flex justify={'flex-end'} gap={'12px'} className="percentBtns">
          <Button
            borderRadius={'50px'}
            bg={'#D6D6D6'}
            _hover={{ bg: '#cfcece' }}
            _active={{ bg: '#cfcece' }}
            color={'#656565'}
            fontSize={'16px'}
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
            fontSize={'16px'}
            width={'250px'}
            height={'auto'}
            fontWeight={'700'}
            padding={'10px 10px'}
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
