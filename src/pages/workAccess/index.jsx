import React from "react";
import styled from "styled-components";
import { Flex, Text, Button } from "@chakra-ui/react"; 
import mainTool from'@assets/mainTool.png';

const MainHeader = () => {
  return(
    <StContainer>
      <MainSection>
        <StTextBox1>
          <Flex flexDirection="column" gap="30" alignItems="center"  >
            <Text width="100%" fontSize="45px" fontWeight="700" color="#575DFB" >
                    환영합니다!
            </Text>
          </Flex>
          
        </StTextBox1>
        <StTextBox2>
          <Flex flexDirection="column" gap="30" alignItems="center"  >
            <Text width="100%" fontSize="18px" fontWeight="400">
             test123456@gmail.com의 워크스페이스
            </Text>
          </Flex>
          
        </StTextBox2>
      </MainSection>
      <CardSection></CardSection>
    </StContainer>
  );
};

export default MainHeader;

const StContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 110px 200px;
    background-color: #ebecee;
    border: 1px solid blue;
`;

const MainSection = styled.div`
    width: 450px
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    border: 1px solid green;
`;

const StTextBox1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: center;
align-items: center;
justify-content: center;
    gap: 100px;  
    border: 1px solid green;
`;

const StTextBox2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;
    gap: 100px;  
    border: 1px solid green;
`;