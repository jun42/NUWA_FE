import styled from 'styled-components';

const StPlanCard = styled.div`
  width: 330px;
  height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow.primary};
  padding: 4rem 1rem;
`;

export default StPlanCard;
