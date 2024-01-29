import styled from 'styled-components';
import StTextDiv from '@components/Text/StTextDiv';
import StText from '../../components/Text/StText';

const CardHeader = ({ id, headerTitle, headerText }) => {
  let content;
  //highlight text
  if (id === 'PRO') {
    const textArr = splitHighlightText(headerText);
    content = textArr.map((token, index) => {
      if (token.startsWith('[')) {
        return (
          <StText $size={16} $weight={500} $color={'primary400'} key={index}>
            {token.slice(1)}
          </StText>
        );
      } else {
        return (
          <StText $size={16} $weight={500} $color={'grey500'} key={index}>
            {token}
          </StText>
        );
      }
    });
  }
  return (
    <StCardHeader>
      <StTextDiv $size={36} $weight={700}>
        {headerTitle}
      </StTextDiv>
      {id !== 'PRO' ? (
        <StTextDiv $size={16} $weight={500} $color={'grey500'}>
          {headerText}
        </StTextDiv>
      ) : (
        <StTextDiv $size={16} $weight={500} $color={'grey500'}>
          {content}
        </StTextDiv>
      )}
    </StCardHeader>
  );
};

export default CardHeader;

const StCardHeader = styled.div`
  height: 7.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: start;
  align-items: start;
`;
// string => str[]  []로 감싼 문자열 찾기.
const splitHighlightText = (text) => {
  const textArr = [];
  let temporaryStr = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== '[' && text[i] !== ']') {
      temporaryStr += text[i];
    } else if (text[i] === '[') {
      if (temporaryStr.length !== 0) {
        textArr.push(temporaryStr);
        temporaryStr = '[';
      }
    } else if (text[i] === ']') {
      if (temporaryStr.length !== 0) {
        textArr.push(temporaryStr);
        temporaryStr = '';
      }
    }
  }
  return textArr;
};
