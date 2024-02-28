import styled from 'styled-components';
import PlanCard from './PlanCard';
import PageTitle from './PageTitle';
import PlanCardPro from './PlanCardPro';
import SELECT_PLAN_INFO from '@constants/selectPlan/SELECT_PLAN_INFO.js';
const SelectPlan = () => {
  return (
    <StContainer>
      <PageTitle />
      <StCardContainer>
        {SELECT_PLAN_INFO.map((item) => {
          return item.id !== 'PRO' ? (
            <PlanCard
              key={item.id}
              id={item.id}
              headerTitle={item.headerTitle}
              headerText={item.headerText}
              middlePrimary={item.middlePrimary}
              footer={item.footer}
            />
          ) : (
            <PlanCardPro
              key={item.id}
              id={item.id}
              headerTitle={item.headerTitle}
              headerText={item.headerText}
              middlePrimary={item.middlePrimary}
              footer={item.footer}
            />
          );
        })}
      </StCardContainer>
    </StContainer>
  );
};

export default SelectPlan;

// 1920 * 1080 기준
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;
  align-items: start;
  padding: 64px 0;
    max-width: 1440px;
    margin: 0 auto;
`;
const StCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;
