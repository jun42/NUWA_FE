import styled from "styled-components";
import { Flex, Text, Button } from "@chakra-ui/react"; 
import mainTool from'@assets/mainTool.png';

const MainHeader = () => {
  return(
    <StContainer>

      <MainSection>

        <StTextBox>
          <Flex flexDirection="column" gap="32px">
            <Text width="100%" fontSize="40px" fontWeight="700" className="landingPTitle">
              생산성 향상을 위한 
              간편한 협업툴
            </Text>

            <Text width="100%" fontSize="18px" fontWeight="500" color="#24242490" className="landingPSubTitle">
              필요없는 기능으로 복잡해진 협업툴은 그만!
              간편하게 다이렉트 메세지와 채팅, 파일공유
              메일을 사용해보세요.
            </Text>
          </Flex>
          <Button width="45%"
                  padding="12px"
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
    padding: 80px 12px;
    background-color: #ebecee;
`;

const MainSection = styled.div`
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 8px;
`;

const StTextBox = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 25%;
    padding: 32px 0;
`;

const StImageBox = styled.div`
`;