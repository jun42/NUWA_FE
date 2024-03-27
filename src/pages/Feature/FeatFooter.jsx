import styled from 'styled-components';
import StText from '@components/Text/StText';
import { Flex, Text, Image, Box } from '@chakra-ui/react';
import { Sub_Feat } from '@constants/selectPlan/SELECT_FEAT_INFO';

const FeatFooter = () => {
  return (
    <StContainer>
      <Text
        fontSize={{ SE: '22px', sm: '28px', md: '38px', lg: '42px' }}
        fontWeight={'700'}
        color={'white'}
      >
        새롭게 추가된 기능
      </Text>
      <Flex gap={'20px'}>
        {Sub_Feat.map((item, index) => (
          <NewFeatCard key={index}>
            <img
              width={'400px'}
              height={'358px'}
              src={item.Image}
              alt="칸반보드 이미지"
            />

            <Flex
              width={'250px'}
              height={{ SE: '132px', sm: '132px', md: '162px', lg: '162px' }}
              flexDirection={'column'}
              align={'center'}
              gap={{ SE: '20px', sm: '25px', md: '30px', lg: '35px' }}
              textAlign={'center'}
            >
              <Image
                boxSize={{ SE: '28px', sm: '32px', md: '38px', lg: '48px' }}
                src={item.Icon}
                alt="1번 원형 아이콘"
              />

              <Text
                fontSize={{ SE: '16px', sm: '18px', md: '20px', lg: '22px' }}
                fontWeight={700}
                textAlign={'center'}
                color={'white'}
                whiteSpace={'pre-line'}
              >
                {item.MainText}
              </Text>
            </Flex>
          </NewFeatCard>
        ))}
      </Flex>
    </StContainer>
  );
};

export default FeatFooter;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 100%;
  padding: 80px 12px;
  gap: 100px;
`;

const NewFeatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 42px;
`;
