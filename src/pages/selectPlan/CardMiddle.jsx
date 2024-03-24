import styled from 'styled-components';
import StText from '@components/Text/StText';
import { Button } from '@chakra-ui/react';

const CardMiddle = ({ middlePrimary, id }) => {
  // linear-gradient(91deg, #5158FF 0%, rgba(81, 88, 255, 0.80) 100%);
  return (
    <StMiddle>
      {/* PRO용  */}
      <StTextContainer>
        {id === 'PRO' && (
          <StText $size={36} $weight={700} $decoration={'line-through'}>
            {'8.75 '}
          </StText>
        )}
        <StText $size={36} $weight={700} $color={'primary400'}>
          {middlePrimary}
        </StText>
        <StText $size={36} $weight={700}>
          {'/월'}
        </StText>
      </StTextContainer>
      <Button
        // bg={'secondary.500'}
        bgGradient={'linear(to-r,#5158FF 0%, #7479ff 100%)'}
        _hover={{ bgGradient: 'linear(to-r,#4F52F2 0%, #7275f5 100%)' }}
        _active={{ bgGradient: 'linear(to-r,#4548EA 0%, #6a6dee 100%)' }}
        width={'100%'}
        borderRadius={'full'}
        paddingTop={'13px'}
        paddingBottom={'13px'}
        height={'3rem'}
        onClick={() => {
          alert('현재 개발중인 서비스입니다.');
        }}
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
