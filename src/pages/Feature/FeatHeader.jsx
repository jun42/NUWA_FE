import styled from 'styled-components';
import descriptionheaderImage from '@assets/descriptionheaderImage.png'
import white_logo from '@assets/white_logo.png';
import StTextDiv from '@components/Text/StTextDiv';
import StText from '@components/Text/StText';
import leftweb from '@assets/leftweb.png'
import rightweb from '@assets/rightweb.png'
import centerweb from '@assets/centerweb.png'
import { Flex, Text, Box } from "@chakra-ui/react";
const FeatHeader = () => {
  return (
    <StContainer>
        <img
            width={'100%'}
            height={'737px'}
            src={descriptionheaderImage}
            alt="기능설명 헤더 이미지"
        />

        <StTextBox>
            <StMainText>
                <img
                width={'181px'}
                height={'47px'}
                src={white_logo}
                alt='로고'
                />

                <StTextDiv $size={48} $weight={700} $color={'white'}>
                    에서는 미래의 업무가 <StText $color={'primary400'}>이루어지는 곳</StText>입니다
                </StTextDiv>
            </StMainText>

            <Flex justify="center" align="center" flexDirection="center">
                <Text fontSize="22px" fontWeight="700" color="white" textAlign="center">
                사람은 물론 업무에 필요한 모든 걸 한 곳에 집중시킴으로써
                <br/>
                기존의 업무 방식을 완전히 바꿔 보새요.
                </Text>
            </Flex>

        </StTextBox>

        <Flex width="100%">
            <img 
            width={'25%'} 
            height={'275px'} 
            src={leftweb} 
            alt="헤더 왼쪽 웹 이미지"
            style={{
                zIndex:1,
                position: 'absolute',
                left: '15%', 
                bottom: '0px'
                 }}
            />

            <img 
            width={'25%'} 
            height={'275px'} 
            src={rightweb} 
            alt="헤더 오른쪽 웹 이미지"
            style={{
                zIndex:1,
                position: 'absolute',
                right: '15%', 
                bottom: '0px', 
                 }}
            /> 

            <img 
            width={'30%'} 
            height={'363px'} 
            src={centerweb} 
            alt="헤더 가운데 웹 이미지"
            style={{
                position: 'absolute',
                right: '35%', 
                bottom: '30px', 
                 }}
            />
        </Flex>

    </StContainer>
  )
}

export default FeatHeader

const StContainer = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 160px;
    position: relative;
    gap: 20%;
   `;

const StTextBox = styled.div`
    display: flex;
    width: 100%;
    height: 291px;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
    position: absolute;
    top: 100px;
    `;

const StMainText =styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
