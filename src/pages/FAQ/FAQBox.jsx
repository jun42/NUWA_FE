import { Flex, Box, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import React, { useState } from 'react';
import Polygon from '@assets/Polygon.svg';
import { FAQ_text } from '@constants/selectPlan/SELECT_FEAT_INFO';

const FAQBox = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetail = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <BoxContainer>
        {FAQ_text.map((FAQ, index) => (
          <React.Fragment key={index}>
            <TextBoxContainer onClick={() => toggleDetail(index)}>
              <Flex gap={'15px'}>
                <ButtonBox color={'#575dfb'}>질문</ButtonBox>
                <Text fontSize={'14px'} fontWeight={'black'}>
                  {FAQ.QuestionText}
                </Text>
              </Flex>

              <img src={Polygon} alt="삼각형 아이콘" />
            </TextBoxContainer>

            {activeIndex === index && (
              <DetailContainer>
                <Flex gap={'15px'}>
                  <ButtonBox color={'#575dfb99'}>답변</ButtonBox>
                  <Text fontSize={'14px'} fontWeight={'500'}>
                    {FAQ.AnswerText}
                  </Text>
                </Flex>

                <img src={Polygon} alt="삼각형 아이콘" />
              </DetailContainer>
            )}
          </React.Fragment>
        ))}
      </BoxContainer>
    </>
  );
};

export default FAQBox;

const BoxContainer = styled.div`
  width: 70%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const TextBoxContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 12px;
  gap: 15px;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  width: 60px;
  height: 23px;
  padding: 5px 19px;
  background-color: ${(props) => props.color};
  border-radius: 28px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px 20px;
  display: flex;
  border: 1px solid #ccc;
  gap: 15px;
  justify-content: space-between;
  border-radius: 12px;
`;
