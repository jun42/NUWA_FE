import React from 'react'
import { Grid } from '@chakra-ui/react'
import TopSection from './TopSection' 
import styled from 'styled-components'


const dashBoard = () => {
  return (
    <StContainer>
      <Grid templateRows="" gap={6} >
      <TopSection/>
        {/* <BottomSection/> */}

      </Grid>
       
    </StContainer>
  )
}

export default dashBoard;


const StContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
`;