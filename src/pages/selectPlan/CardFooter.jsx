import styled from 'styled-components';
import StText from '@components/Text/StText';
import TriangleDownIcon from '@assets/triangleDown.svg';

const CardFooter = ({ footer }) => {
  return (
    <div>
      <StContainer>
        {footer.map((item, index) => {
          return (
            <StItem key={index}>
              <img
                width={'24px'}
                height={'24px'}
                src={TriangleDownIcon}
                alt="아이콘"
              />
              <StText $weight={600}>{item}</StText>
            </StItem>
          );
        })}
      </StContainer>
    </div>
  );
};

export default CardFooter;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 14px;
  width: 85%;
`;
const StItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
