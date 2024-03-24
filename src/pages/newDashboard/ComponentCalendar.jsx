import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Flex, Image } from '@chakra-ui/react';
import styled from 'styled-components';
import CalendarIcon from '@assets/calendar_icon.svg';
const mockEvents = [
  {
    id: 1,
    title: 'Figma UI 수정하기',
    date: '2023-04-12',
    daysLeft: 3,
  },
];

const ComponentCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(mockEvents);
  }, []);

  return (
    <StContainer>
      <Flex
        display={'flex'}
        p={'10px 15px'}
        align={'center'}
        height={'10%'}
        borderTopRadius={'10px'}
        bg={'#F5F5F5'}
        gap={'10px'}
      >
        <Image src={CalendarIcon} />
        <Text fontSize="16px" fontWeight="bold" align={'center'}>
          캘린더
        </Text>
      </Flex>
      <Box padding={'20px'} height={'90%'} overflowY={'auto'}>
        {events.map((event) => (
          <Box
            key={event.id}
            p={3}
            borderWidth="1px"
            width="100%"
            display={'flex'}
            flexFlow={'column'}
            gap={'10px'}
            borderBottom={'1px solid #D9D9D9'}
          >
            <Text fontWeight="bold">{event.date} </Text>
            <Flex justify={'space-between'}>
              <Text fontWeight="bold">{`${event.title}`} </Text>
              <Text color={'red'}>{`[${event.daysLeft}일 남음]`}</Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </StContainer>
  );
};

export default ComponentCalendar;

const StContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
`;
