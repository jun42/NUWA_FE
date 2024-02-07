import React from 'react';
import styled from 'styled-components';
import StText from '@components/Text/StText';
import StTextDiv from '@components/Text/StTextDiv';
import kanban_board from '@assets/kanban_board.png';
import circle_one from '@assets/circle_one.png';
import { Flex, Text } from '@chakra-ui/react';
import { Sub_Feat } from '@constants/selectPlan/SELECT_FEAT_INFO';

const FeatFooter = () => {
  return (
    <StContainer>
      <StText $color={'white'} $size={40} $weight={700}>
        새롭게 추가된 기능
      </StText>
      <Flex gap={'24px'}>
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
              height={'162px'}
              flexDirection={'column'}
              align={'center'}
              gap={'35px'}
              textAlign={'center'}
            >
              <img
                width={'48px'}
                height={'48px'}
                src={item.Icon}
                alt="1번 원형 아이콘"
              />

              <Text
                fontSize={'30px'}
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
  padding: 100px 139px;
  gap: 100px;
`;

const NewFeatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 80px;
`;
