import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Box, Image } from '@chakra-ui/react';
import { mainCards } from '@constants/selectPlan/SELECT_ALL_INFO';

const MainCenter = () => {
  return (
    <StContainer>
      {mainCards.map((card, index) => (
        <MainSection
          key={index}
          style={{ flexDirection: index === 1 ? 'row-reverse' : 'row' }}
        >
          <Image src={card.src} alt={card.alt} />

          <StTextBox>
            <Flex flexDirection="column" gap="18px">
              <Text width="100%" fontSize="43px" fontWeight="700">
                {card.title.split('\n').map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Text>
              <Text width="100%" fontSize="15px" fontWeight="400">
                {card.description.split('\n').map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Text>
            </Flex>
            <Flex flexDirection="column">
              <Text
                width="100%"
                fontSize="20px"
                fontWeight="700"
                color="#575DFB"
              >
                {card.detail}
              </Text>
            </Flex>
          </StTextBox>
        </MainSection>
      ))}
    </StContainer>
  );
};

export default MainCenter;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 120px 150px;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fb;
`;

const MainSection = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  gap: 79px;
  padding-top: 40px;
  padding-bottom: 80px;
`;

const StTextBox = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 150px;
  margin-left: auto;
`;
