import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ComponentLogin from './ComponentLogin';
import ComponentSentfile from './ComponentSentFile';
import ComponentDirect from './ComponentDirect';
import ComponentFavorite from './ComponentFavorite';
import ComponentCalendar from './ComponentCalendar';
import { Flex, Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import useBoundStore from '@store/store';

const DashBoard = () => {
  return (
    <StContainer>
      <Box display={'flex'} width={'100%'} height={'40%'} gap={'20px'}>
        <Box
          width={'18%'}
          minW={'160px'}
          border={'1px solid #D9D9D9'}
          borderTopRadius={'10px'}
          shadow={'md'}
        >
          <ComponentLogin />
        </Box>
        <Box
          width={'50%'}
          border={'1px solid #D9D9D9'}
          borderTopRadius={'10px'}
          shadow={'md'}
        >
          <ComponentSentfile />
        </Box>
        <Box
          width={'32%'}
          border={'1px solid #D9D9D9'}
          borderTopRadius={'10px'}
          shadow={'md'}
        >
          <ComponentDirect />
        </Box>
      </Box>

      <Flex height={'60%'} gap={'20px'}>
        <Box
          width={'calc(67% + 20px)'}
          border={'1px solid #D9D9D9'}
          borderRadius={'10px'}
          shadow={'md'}
        >
          <ComponentFavorite />
        </Box>
        <Box
          width={'32%'}
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

export default DashBoard;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 20px;
  justify-content: center;
  padding: 50px;

  /* @media (min-width: 481px) and (max-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 30px;
  }

  @media (min-width: 1441px) {
    padding: 50px;
  } */
`;
