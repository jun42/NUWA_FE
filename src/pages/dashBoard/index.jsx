import React from 'react'
import {Flex} from '@chakra-ui/react'
import TopSection from './TopSection' 


const dashBoard = () => {
  return (
    <StContainer>
      <Flex direction="column" >
        <TopSection/>
        {/* <BottomSection/> */}
      </Flex>
    </StContainer>
  )
}

export default dashBoard;


const StContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;