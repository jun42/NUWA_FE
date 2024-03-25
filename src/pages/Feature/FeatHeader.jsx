import styled, { keyframes } from 'styled-components';
import descriptionheaderImage from '@assets/descriptionheaderImage.png';
import white_logo from '@assets/white_logo.png';
import StTextDiv from '@components/Text/StTextDiv';
import StText from '@components/Text/StText';
import leftweb from '@assets/leftweb.jpg';
import rightweb from '@assets/rightweb.jpg';
import centerweb from '@assets/centerweb.jpg';
import { Flex, Text, Image } from '@chakra-ui/react';
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
          <img width={'181px'} height={'47px'} src={white_logo} alt="로고" />

          <StTextDiv $size={42} $weight={700} $color={'white'}>
            <span className="disNone">에서는</span> 미래의 업무가{' '}
            <StText $color={'primary400'}>이루어지는 곳</StText>입니다
          </StTextDiv>
        </StMainText>

        <Flex justify="center" align="center" flexDirection="center">
          <Text
            fontSize="20px"
            fontWeight="500"
            color="white"
            textAlign="center"
          >
            사람은 물론 업무에 필요한 모든 걸 한 곳에 집중시킴으로써
            <br />
            기존의 업무 방식을 완전히 바꿔 보새요.
          </Text>
        </Flex>
      </StTextBox>

      <Flex width="100%">
        <AnimatedImage
          border={'5px solid black'}
          borderRadius={'3px'}
          width={'25%'}
          height={'275px'}
          src={leftweb}
          alt="헤더 왼쪽 웹 이미지"
          style={{
            zIndex: 1,
            position: 'absolute',
            left: '16%',
            bottom: '0px',
          }}
          delay={0} // 바로 시작
        />
        <AnimatedImage
          border={'5px solid black'}
          borderRadius={'3px'}
          width={'25%'}
          height={'275px'}
          src={rightweb}
          alt="헤더 오른쪽 웹 이미지"
          style={{
            zIndex: 1,
            position: 'absolute',
            right: '19%',
            bottom: '0px',
          }}
          delay={1} // 0.5초 후 시작
        />
        <AnimatedImage
          border={'5px solid black'}
          borderRadius={'3px'}
          width={'30%'}
          height={'363px'}
          src={centerweb}
          alt="헤더 가운데 웹 이미지"
          style={{
            position: 'absolute',
            right: '35%',
            bottom: '30px',
          }}
          delay={2} // 1초 후 시작
        />
      </Flex>
    </StContainer>
  );
};

export default FeatHeader;

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

const StMainText = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

// 아래에서 위로 슬라이드하는 애니메이션 정의
const slideUp = keyframes`
  from {
    transform: translateY(100%); // 시작 위치를 아래로 조정하여 이미지가 처음에는 보이지 않음
    opacity: 0; // 시작할 때 이미지가 투명하게 설정하여 보이지 않게 함
  }
  to {
    transform: translateY(0); // 최종 위치에서 이미지가 화면에 보이게 됨
    opacity: 1; // 이미지가 완전히 불투명하게 되어 화면에 나타남
  }
`;

// 애니메이션을 적용할 이미지 컴포넌트에 대한 스타일링
const AnimatedImage = styled(Image)`
  animation: ${slideUp} 1.5s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s; // prop으로 받은 지연 시간 설정
`;
