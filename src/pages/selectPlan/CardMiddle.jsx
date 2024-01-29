import styled from 'styled-components';
import StText from '@components/Text/StText';
import Button from '@components/Button/Button';

const CardMiddle = ({ middlePrimary, id }) => {
  return (
    <StMiddle>
      {/* PRO용  */}
      <StTextContainer>
        {id === 'PRO' && (
          <StText $size={40} $weight={700} $decoration={'line-through'}>
            {'8.75 '}
          </StText>
        )}
        <StText $size={40} $weight={700} $color={'primary400'}>
          {middlePrimary}
        </StText>
        <StText $size={40} $weight={700}>
          {'/월'}
        </StText>
      </StTextContainer>
      <Button
        $type={'solid'}
        $color={'primary400'}
        $rounded={'50px'}
        $padding={'12px'}
      >
        <StText $color="grey100" $size={20} $weight={600}>
          시작하기
        </StText>
      </Button>
    </StMiddle>
  );
};

export default CardMiddle;
const StMiddle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.125rem;
`;

const StTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// const StButton = styled.button`
//   width: 330px;
//   height: 48px;
//   background-color: ${({ theme }) => theme.color.priamry400};
//   padding: auto;
//   text-align: center;
//   font-size: 1.25rem;
//   color: #fff;
//   font-weight: 600;
//   border-radius: 50px;
// `;
