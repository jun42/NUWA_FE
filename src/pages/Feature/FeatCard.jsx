import styled from 'styled-components';
import StTextDiv from '@components/Text/StTextDiv';
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
    <StCardContainer backgroundImage={backgroudImage}>
      <StTextBox>
        <StTextDiv $size={36} $weight={700} $color={textColor}>
          {styledText}

          <img
            width={'58px'}
            height={'58px'}
            src={icon}
            alt={alt}
            style={{ marginTop: '20px' }}
          />
        </StTextDiv>

        <StTextSubBox>
          <StTextDiv $size={16} $weight={700} $color={textColor}>
            {subText}
          </StTextDiv>

          <StTextDiv $size={16} $weight={700} $color={'primary400'}>
            {detailText}
          </StTextDiv>
        </StTextSubBox>
      </StTextBox>
    </StCardContainer>
  );
};

export default FeatCard;

const StCardContainer = styled.div`
  width: 90%;
  border-radius: 20px;
  background-image: url(${(props) => props.backgroundImage});
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
`;

const StTextSubBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
