import styled from 'styled-components';
import { Flex, Text, Button } from '@chakra-ui/react';
import StText from '@components/Text/StText';
import StTextDiv from '@components/Text/StText';
import { percent_section } from '@constants/selectPlan/SELECT_ALL_INFO';
const Percent = () => {
  return (
    <StContainer>
      <PercentContainer>
        <Flex flexDirection={'column'} gap={'24px'}>
          <StText $size={50} $weight={700} $color={'white'}>
            크고 작은 팀들 모두 NUWA를 사용합니다
          </StText>
          <StText $size={20} $weight={500} $color={'white'}>
            NUWA는 세계 최대 규모의 기업들이 안전하게 협업할 수 있도록 지원을
            확대하고 있습니다
          </StText>
        </Flex>

        <Flex justifyContent={'space-between'}>
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

        <Flex justify={'flex-end'} gap={'12px'} border={'1px solid red'}>
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
  height: 100%;
  background: url('src/assets/blacklinear.png');
`;

const PercentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 100%;
  padding: 80px 150px;
`;
