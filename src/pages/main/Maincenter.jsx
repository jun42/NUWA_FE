import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Box, Image } from '@chakra-ui/react';
import { mainCards } from '@constants/selectPlan/SELECT_ALL_INFO';

const MainCenter = () => {
  return (
    <StContainer>
      {mainCards.map((card, index) => (
        <MainSection key={index} style={{flexDirection:index === 1? 'row-reverse' : 'row'}} className='R3ConWrap'>
            <Image src={card.src} alt={card.alt} width="50%" />
          <StTextBox>
            <Flex flexDirection="column" gap="18px">
              <Text width="100%" fontSize="36px" fontWeight="700" className='landingPTitle'>
                {card.title.split('\n').map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Text>
              <Text width="100%" fontSize="18px" fontWeight="500" color="#24242490" className='landingPSubTitle'>
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
  padding: 80px 12px;
  background-color: #f8f9fb;
`;

const MainSection = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding-top: 120px;
  padding-bottom: 60px;
  margin: 0 auto;
`;

const StTextBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
