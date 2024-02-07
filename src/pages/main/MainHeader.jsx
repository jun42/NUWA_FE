import React from "react";
import styled from "styled-components";
import { Flex, Text, Button } from "@chakra-ui/react"; 
import mainTool from'@assets/mainTool.png';

const MainHeader = () => {
  return(
    <StContainer>
      <MainSection>
        <StTextBox>
          <Flex flexDirection="column" gap="30">
            <Text width="100%" fontSize="45px" fontWeight="700">
              생산성 향상을 위한 
              <br/>
              간편한 협업툴
            </Text>

            <Text width="100%" fontSize="18px" fontWeight="400">
              필요없는 기능으로 복잡해진 협업툴은 그만!
              <br />
              간편하게 다이렉트 메세지와 채팅, 파일공유
              <br />
              메일을 사용해보세요.
            </Text>
          </Flex>
          <Button width="45%" 
                  fontSize="16px"
                  fontWeight="700"
                  color="white"
                  borderRadius="full"
                  bgColor="#575DF8"
          >
            무료로시작하기

          </Button>
        </StTextBox>
        <StImageBox>
          <img src={mainTool} alt="메인 툴 이미지" style={{ width: '100%', height: '100%' }} />
        </StImageBox>
      </MainSection>
    </StContainer>
  );
};

export default MainHeader;

const StContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 110px 200px;
    background-color: #ebecee;
    //border: 1px solid blue;
`;

const MainSection = styled.div`
    width: 450px
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 79px;
    //border: 1px solid green;
`;

const StTextBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;  
`;

const StImageBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;