import FeatHeader from "./FeatHeader"
import FeatCenter from "./FeatCenter"
import styled from "styled-components"
const index = () => {
  return (
    <StContainer>
    <FeatHeader/>
    <FeatCenter/>
    </StContainer>
  )
}

export default index

const StContainer = styled.div`
  max-width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
  align-items: start;
`;
