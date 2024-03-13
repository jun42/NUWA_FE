import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ComponentLogin from './ComponentLogin';
import ComponentSentfile from './ComponentSentFile';
import ComponentDirect from './ComponentDirect';
import ComponentFavorite from './ComponentFavorite';
import ComponentCalendar from './ComponentCalendar';
import { Flex, Box } from '@chakra-ui/react';

const dashBoard = () => {
  return (
    <StContainer>
      <Box display={'flex'} width={'100%'} height={'40%'} gap={'20px'}>
        <Box
          width={'17%'}
          border={'1px solid #D9D9D9'}
          borderTopRadius={'10px'}
          shadow={'md'}
          padding={'0px 20px 20px 20px'}
        >
          <ComponentLogin />
        </Box>
        <Box
          width={'60%'}
          border={'1px solid #D9D9D9'}
          borderTopRadius={'10px'}
          shadow={'md'}
        >
          <ComponentSentfile />
        </Box>
        <Box
          width={'27%'}
          border={'1px solid #D9D9D9'}
          borderTopRadius={'10px'}
          shadow={'md'}
        >
          <ComponentDirect />
        </Box>
      </Box>
      <Flex height={'60%'} gap={'20px'}>
        <Box
          width={'calc(77% + 20px)'}
          border={'1px solid #D9D9D9'}
          borderRadius={'10px'}
          shadow={'md'}
        >
          <ComponentFavorite />
        </Box>
        {/* Box4가 2열을 차지하도록 설정 */}
        <Box
          width={'27%'}
          border={'1px solid #D9D9D9'}
          borderTopRadius={'10px'}
          shadow={'md'}
        >
          <ComponentCalendar />
        </Box>
      </Flex>
    </StContainer>
  );
};

export default dashBoard;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 70px;
  gap: 20px;

  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 70px;
  gap: 20px;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 20px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 50px;
  }

  @media (min-width: 1441px) {
    padding: 70px;
  }
`;
