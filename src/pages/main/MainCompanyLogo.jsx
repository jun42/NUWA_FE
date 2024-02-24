import styled, { keyframes } from "styled-components";
import { Flex , Text } from "@chakra-ui/react";
import amazon from '@assets/amazon.png';
import airbnb from '@assets/air.png';
import drop from '@assets/drop.png';
import google from '@assets/google.png'
import micro from '@assets/micro.png'
import pinterest from '@assets/pinterest.png'
import samsung from '@assets/sams.png';
import spotify from '@assets/spoti.png';


const logos = [
  { src: amazon, alt: '아마존' },
  { src: airbnb, alt : '에어비앤비'},
  { src: drop, alt: '드롭박스' },
  { src: google, alt: '구글' },
  { src: micro, alt: '마이크로' },
  { src: pinterest, alt: '핀터레스트' },
  { src: spotify, alt: '스포티파이' }
  
];
const extendedLogos = [...logos, ...logos, ...logos, ...logos];

const MainCompanyLogo = () => {
  return (
    <StContainer>
      <MainSection>
      <StTextBox>
          <Flex flexDirection="column" alignItems="center" justifyContent="center">
            <Text fontSize="36px" fontWeight="700">
              전 세계 기업들이 신뢰하는 NUWA
            </Text>
          </Flex>
      </StTextBox>
     </MainSection>
     <StImageBox>
        {extendedLogos.map((logo, index) => (
          <Logo key={index} src={logo.src} alt={logo.alt} />
        ))}
  
      </StImageBox>
    </StContainer>
  );
};

export default MainCompanyLogo;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100% / 4)); } 
`;

const StContainer = styled.div`
  width: 100%;
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  padding : 80px 12px;
  gap: 36px;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const StTextBox = styled.div`
 text-align: center;
 padding: 20px;
 margin-bottom: 40px;
 
`;

const StImageBox = styled.div`
  display: flex;
  animation: ${scroll} 10s linear infinite; 
  will-change: transform; 
  gap: 50px;
  align-items: center;
`;

const Logo = styled.img`
  width: 208px;
  height: 100%; 
  margin-right: 58x; 
`;