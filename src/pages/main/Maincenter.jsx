import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Box, Image } from "@chakra-ui/react";
import mainCard1 from '@assets/mainCard1.png';
import mainCard2 from '@assets/mainCard2.png';
import mainCard3 from '@assets/mainCard3.png';


const mainCards = [
  {
    src: mainCard1 ,
    alt: '메인카드1',
    title: '도구들을 한곳에 모아\n더 빠르게\n업무를 진행하세요',
    description: '생산형 AI의 강력한 기능으로 자리비움 루틴을\n자동화하고 자주 사용하는 앱을 \nNuwa에서 바로 사용할 수 있도록 워크플로를 간소화합니다',
    detail: 'Slack 플랫폼에 관해 자세히 알아보기 >',
  },
  {
    src: mainCard2 ,
    alt: '메인카드2',
    title: '원하는 업무 방식을\n선택하세요 ' ,
    description: 'Nuwa는 사용자가 언제,어디서,어떻게 일하든 최적의 환경\n을 제공하는 유연성을 갖추고 있습니다. 쉽게 채팅하고,오디오\n나 비디오 클립을 전송하고,또  실시간 논의를 위해 허들\n에 참여할 수 있습니다' ,
    detail: '간편한 커뮤니케이션에 관해 자세히 알아보기 >',


  },
  {
    src: mainCard3 ,
    alt: '메인카드3',
    title: '팀을 모두 한곳으로 모아\n 편하게 관리하세요 ' ,
    description: 'Nuwa의 중심에는 모든인력과 업무에 필요한 모든것을 체계화\n할 수 있간인 채널이 있습니다. 채널에서는 부서,사무실,다른시간\n대 뿐만 아니라 심지어 다른 회사와의 연결도 더욱 수월해집니다.' ,
    detail: '채널에 관해 자세히 알아보기 >',

  }
  
];

const MainCenter = () => {
  return (
    <StContainer>
      {mainCards.map((card, index) => (
        <MainSection key={index} style={{flexDirection:index === 1? 'row-reverse' : 'row'}}>
          <ImageBox>
            <Image src={card.src} alt={card.alt} boxsize="750px" objectFit="cover" />
          </ImageBox>
          <StTextBox>
            <Flex flexDirection="column" gap="18px">
              <Text width="100%" fontSize="43px" fontWeight="700">
                {card.title.split('\n').map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Text>
              <Text width="100%" fontSize="15px" fontWeight="400">
                {card.description.split('\n').map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Text>
            </Flex>
            <Flex flexDirection="column">
              <Text width="100%" fontSize="20px" fontWeight="700" color="#575DFB">
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
    max-width: 1920px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 120px 150px;
    justify-content: center;
    align-items: center;
`;

const MainSection = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 79px;
    padding-top: 40px;
    padding-bottom: 80px;
`;

const ImageBox = styled(Box)`
    width: 500x;
    height: 400px;
`;

const StTextBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;
    margin-left: auto;
`;