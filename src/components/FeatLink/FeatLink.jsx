import React from 'react';
import styled from 'styled-components';
import StTextDiv from '@components/Text/StTextDiv';
import StText from '@components/Text/StText';
import newfeatillustrator from '@assets/newfeatillustrator.png';
import { Feat_link_card } from '@constants/selectPlan/SELECT_FEAT_INFO';
import { Box, Text } from '@chakra-ui/react';

const FeatLink = () => {
  return (
    <StContainer $backgroundColor={'primary400'}>
      <IllustratorBox>
        <StTextDiv $color={'white'} $size={50} $weight={700}>
          새로운 업무 방식을
          <br /> 더 자세히 알아보세요
        </StTextDiv>
        <img
          width={'450px'}
          height={'400px'}
          src={newfeatillustrator}
          alt="사람 일러스트"
        />
      </IllustratorBox>
      <CardBox>
        {Feat_link_card.map((Card, index) => (
          <FeatCard key={index}>
            <Box width={'250px'} height={170}>
              <StText $size={36} $weight={700}>
                {Card.HeaderText}
              </StText>
            </Box>
            <StTextDiv $size={36}>{Card.Icon}</StTextDiv>

            <StTextDiv $size={20} $weight={700} $color={'primary400'}>
              {Card.LinkText}
            </StTextDiv>
          </FeatCard>
        ))}
      </CardBox>
    </StContainer>
  );
};

export default FeatLink;

const StContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme, $backgroundColor = 'primary400' }) =>
    theme.color[$backgroundColor]};
  padding: 50px 150px;
`;

const IllustratorBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 146px;
`;

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 600px;
  margin-left: 100px;
`;

const FeatCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 373px;
  border-radius: 24px;
  padding: 20px;
  background: #fff;
  gap: 50px;
`;
