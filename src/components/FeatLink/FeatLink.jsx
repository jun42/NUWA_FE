import styled from 'styled-components';
import StTextDiv from '@components/Text/StTextDiv';
import StText from '@components/Text/StText';
import newfeatillustrator from '@assets/newfeatillustrator.png';
import { Feat_link_card } from '@constants/selectPlan/SELECT_FEAT_INFO';
import { Box, Text, Image } from '@chakra-ui/react';

const FeatLink = () => {
  return (
    <StContainer $backgroundColor={'primary400'}>
      <IllustratorBox>
        <Text
          color={'white'}
          fontSize={{ SE: '24px', sm: '28px', md: '38px', lg: '42px' }}
          fontWeight={'700'}
          textAlign={{ SE: 'center', xl: 'left' }}
          mb={'20px'}
        >
          새로운 업무 방식을
          <br /> 더 자세히 알아보세요
        </Text>
        <Image
          width={{ SE: '250px', sm: '300px', md: '370px', lg: '450px' }}
          height={{ SE: '200px', sm: '250px', md: '320px', lg: '400px' }}
          src={newfeatillustrator}
          alt="사람 일러스트"
        />
      </IllustratorBox>
      <CardBox>
        {Feat_link_card.map((Card, index) => (
          <FeatCard key={index}>
            <Box width={{ SE: '200px', lg: '250px' }} height={'170px'}>
              <Text
                fontSize={{ SE: '26px', sm: '30px', md: '32px', lg: '36px' }}
                fontWeight={'700'}
              >
                {Card.HeaderText}
              </Text>
            </Box>
            <Text fontSize={{ SE: '30px', sm: '32px', md: '34px', lg: '36px' }}>
              {Card.Icon}
            </Text>

            <Text
              fontSize={{ SE: '16px', sm: '16px', md: '20px', lg: '20px' }}
              fontWeight={'700'}
              color={'#575DFB'}
            >
              {Card.LinkText}
            </Text>
          </FeatCard>
        ))}
      </CardBox>
    </StContainer>
  );
};

export default FeatLink;

const StContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme, $backgroundColor = 'primary400' }) =>
    theme.color[$backgroundColor]};
  padding: 80px 12px;
  justify-content: center;
`;

const IllustratorBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 146px;
`;

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 600px;
  margin-left: 100px;
`;

const FeatCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 373px;
  border-radius: 24px;
  padding: 20px;
  background: #fff;
  gap: 50px;
`;
