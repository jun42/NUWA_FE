import styled from 'styled-components';
import SignUpForm from './SingUpForm';

const Main = () => {
  return (
    <StContainer>
      <SignUpForm />
    </StContainer>
  );
};

export default Main;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
