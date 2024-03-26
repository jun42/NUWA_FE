import styled from 'styled-components';
import { Text, Image } from '@chakra-ui/react';
const FeatCard = ({
  backgroudImage,
  icon,
  alt,
  mainText,
  subText,
  detailText,
  index,
}) => {
  const textColor = index === 1 ? 'white' : 'inherit';

  const keywords = ['업무 방식을 체계화', '시간에 집중'];

  // 키워드를 기준으로 텍스트를 분리하고, 각 부분에 스타일 적용
  const styledText = mainText
    .split(new RegExp(`(${keywords.join('|')})`, 'gi'))
    .map((part, index) => {
      if (
        keywords.some((keyword) => part.toLowerCase() === keyword.toLowerCase())
      ) {
        return (
          <span key={index} style={{ color: '#575DFB' }}>
            {part}
          </span>
        );
      } else {
        return part;
      }
    });

  return (
    <StCardContainer $backgroundImage={backgroudImage}>
      <StTextBox>
        <Text
          fontSize={{ SE: '24px', sm: '28px', md: '32px', lg: '36px' }}
          fontWeight={'700'}
          color={textColor}
        >
          {styledText}

          <Image
            boxSize={{ SE: '24px', sm: '38px', md: '44px', lg: '54px' }}
            src={icon}
            alt={alt}
            style={{ marginTop: '20px' }}
          />
        </Text>

        <StTextSubBox>
          <Text
            fontSize={{ SE: '10px', sm: '12px', md: '14px', lg: '16px' }}
            fontWeight={'700'}
            color={textColor}
          >
            {subText}
          </Text>

          <Text
            fontSize={{ SE: '10px', sm: '12px', md: '14px', lg: '16px' }}
            fontWeight={'700'}
            color={'#575DFB'}
          >
            {detailText}
          </Text>
        </StTextSubBox>
      </StTextBox>
    </StCardContainer>
  );
};

export default FeatCard;

const StCardContainer = styled.div`
  width: 90%;
  border-radius: 20px;
  background-image: url(${(props) => props.$backgroundImage});
  display: flex;
  padding: 58px 52px;
  justify-content: center;
  align-items: center;
`;

const StTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
  white-space: pre-line;
  @media (max-width: 1024px) {
    gap: 80px;
  }
`;

const StTextSubBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1024px) {
    gap: 20px;
  }
`;
