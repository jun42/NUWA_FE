import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Box, Image } from '@chakra-ui/react';
import { mainCards } from '@constants/selectPlan/SELECT_ALL_INFO';

const MainCenter = () => {
  return (
    <StContainer>
      {mainCards.map((card, index) => (
        <MainSection key={index} className="R3ConWrap">
          <StImageBox>
            <img
              src={card.src}
              alt={card.alt}
              width={'880px'}
              height={'600px'}
            />
          </StImageBox>
          <StTextBox>
            <Flex flexDirection="column" gap="18px">
              <Text
                width="100%"
                fontSize={{
                  SE: '20px',
                  sm: '22px',
                  md: '28px',
                  lg: '34px',
                  xl: '40px',
                  xxl: '48px',
                }}
                fontWeight="700"
                align={{ SE: 'center', sm: 'left' }}
              >
                {card.title.split('\n').map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Text>
              <Text
                width="100%"
                fontSize={{
                  SE: '10px',
                  sm: '12px',
                  md: '14px',
                  lg: '14px',
                  xl: '18px',
                  xxl: '18px',
                }}
                fontWeight="500"
                color="#24242490"
                align={{ SE: 'center', sm: 'left' }}
              >
                {card.description.split('\n').map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Text>
            </Flex>
            <Flex flexDirection="column" mt={{ SE: '10px', md: '0px' }}>
              <Text
                width="100%"
                fontSize={{
                  SE: '10px',
                  sm: '10px',
                  md: '16px',
                  lg: '16px',
                  xl: '20px',
                  xxl: '20px',
                }}
                fontWeight="700"
                color="#575DFB"
                align={{ SE: 'center', sm: 'left' }}
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
  background-color: #ffffff;
`;

const MainSection = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding-top: 120px;
  padding-bottom: 60px;
  margin: 0 auto;
  gap: 50px;
`;

const StTextBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 30%;
`;

const StImageBox = styled.div`
  border: 1px solid #d9d9d9;
`;
