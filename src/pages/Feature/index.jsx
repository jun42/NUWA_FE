import FeatHeader from './FeatHeader';
import FeatCenter from './FeatCenter';
import FeatFooter from './FeatFooter';
import FreeTrial from './FreeTrial';
import FeatLink from '../../components/FeatLink/FeatLink';
import styled from 'styled-components';
const index = () => {
  return (
    <StContainer id='featurePage'>
      <FeatHeader />
      <FeatCenter />
      <FeatFooter />
      <FeatLink />
      <FreeTrial />
    </StContainer>
  );
};

export default index;

const StContainer = styled.div`
  max-width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;