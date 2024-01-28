import CardHeader from './CardHeader';
import CardMiddle from './CardMiddle';
import CardFooter from './CardFooter';
import StPlanCard from '@components/Card/StPlanCard';

const PlanCard = ({ id, headerTitle, headerText, middlePrimary, footer }) => {
  return (
    <StPlanCard>
      <CardHeader id={id} headerTitle={headerTitle} headerText={headerText} />
      <CardMiddle id={id} middlePrimary={middlePrimary} />
      <CardFooter footer={footer} />
    </StPlanCard>
  );
};

export default PlanCard;
