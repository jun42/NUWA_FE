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
    <div>
      <StGradientBorder>
        <StPlanCardPro>
          <StTopInfo>3개월간 50%할인</StTopInfo>
          <CardHeader
            id={id}
            headerTitle={headerTitle}
            headerText={headerText}
          />
          <CardMiddle id={id} middlePrimary={middlePrimary} />
          <CardFooter footer={footer} />
        </StPlanCardPro>
      </StGradientBorder>
    </div>
  );
};

export default PlanCardPro;

const StGradientBorder = styled.div``;

const StPlanCardPro = styled(StPlanCard)`
  --border-width: 4px;
  --border-radius: 12px;

  position: relative;
  border-width: var(--border-width);
  background-image: ${({ theme }) => theme.border.specialBorder};
  border-radius: var(--border-radius);
  z-index: 1;
  & ::before {
    content: '';
    display: block;
    height: calc(100% - calc(var(--border-width) * 2));
    width: calc(100% - calc(var(--border-width) * 2));

    background-color: white;
    position: absolute;
    top: var(--border-width);
    left: var(--border-width);

    border-radius: calc(var(--border-radius) - var(--border-width));
    z-index: -1;
  }
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
