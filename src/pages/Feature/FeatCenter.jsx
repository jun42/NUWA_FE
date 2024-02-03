import React from 'react'
import styled from 'styled-components';
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import FeatCard from "./FeatCard"

const FeatCenter = () => {
  return (
    <StContainer>
        <FeatSection>
            <StTextBox>
                <Flex flexDirection="column" gap="15px"> 
                <Text width="100%" fontSize="38px" fontWeight="700">
                    NUWA 협업툴의 주요기능은
                    <br/>
                    무엇인가요?
                </Text>

                <Text width="100%" fontSize="16px" fontWeight="700" color="#AFAFAF">
                    NUWA의 모든 사람과 모든 것을 위한 회사의 구심점이자 회사가 더 
                    <br/>
                    많은 것들을 이룰 수 있는 생산성 플랫폼입니다.
                </Text>
                </Flex>

                <Button width="30%" fontSize="16px" 
                        fontWeight="700" color="white" 
                        borderRadius="full" bgColor="#575DFB">
                    무료로 시작하기
                </Button>
            </StTextBox>

            <FeatCard/>
        </FeatSection>
    </StContainer>
  )
}

export default FeatCenter

const StContainer = styled.div`
    width: 100%;
    height: 100%;
    padding:154px 256px;
    align-items: center;
`;

const FeatSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 79px;
    border: 1px solid red;
`;

const StTextBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;  
`;