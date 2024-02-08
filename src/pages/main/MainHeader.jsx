import React from "react";
import styled from "styled-components";
import { Flex, Text, Button } from "@chakra-ui/react"; 
import mainTool from'@assets/mainTool.png';

const MainHeader = () => {
  return(
    <StContainer>

      <MainSection>

        <StTextBox>
          <Flex flexDirection="column" gap="60px" marginTop={'40px'}>
            <Text width="100%" fontSize="45px" fontWeight="700" >
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
          <img src={mainTool} alt="메인 툴 이미지" width={'880px'} height={'600px'}/>
        </StImageBox>

      </MainSection>

    </StContainer>
  );
};

export default MainHeader;

const StContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 80px 200px;
    background-color: #ebecee;
    justify-content: center;
    align-items: center;
    
`;

const MainSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 79px;
    
`;

const StTextBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 120px;
`;

const StImageBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;