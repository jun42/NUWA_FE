import React from "react";
import styled from "styled-components";


const MainHeader = () => {
  return(
    <StContainer>
      <MainSection>
        <StTextBox>
          <Flex flexDirection="column" gap="30">
            <Text width="100%" fontSize="45px" fontWeight="700">
              NUWA로 성과뿐만 아니라 직장 문화도 개선 
              <br/>
              하였습니다.
            </Text>

            <Text width="100%" fontSize="18px" fontWeight="400">
              보안과 생산성 측면에서 최고의 솔루션을 제공합니다.
            </Text>
          </Flex>
         
        </StTextBox>
      
      </MainSection>
    </StContainer>
  );
};

export default MainHeader;

const StContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 154px 273px;
    background-color: #ebecee;
    border: 1px solid blue;
`;
