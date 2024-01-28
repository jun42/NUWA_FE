import CardHeader from './CardHeader';
import CardMiddle from './CardMiddle';
import CardFooter from './CardFooter';
import StPlanCard from '@components/Card/StPlanCard';
import styled from 'styled-components';

const PlanCardPro = ({
  id,
  headerTitle,
  headerText,
  middlePrimary,
  footer,
}) => {
  return (
    <StPlanCardPro>
      <StTopInfo>3개월간 50%할인</StTopInfo>
      <CardHeader id={id} headerTitle={headerTitle} headerText={headerText} />
      <CardMiddle id={id} middlePrimary={middlePrimary} />
      <CardFooter footer={footer} />
    </StPlanCardPro>
  );
};

export default PlanCardPro;

const StPlanCardPro = styled(StPlanCard)`
  position: relative;
`;

const StTopInfo = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.color.primary400};
  border-radius: 50px;
  text-align: center;
`;
