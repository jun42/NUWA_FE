import React, { useState, useEffect } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';


const mockEvents = [
  {
    id: 1,
    title: '프로젝트 데드라인',
    date: '2023-02-12',
    daysLeft: 3,
  },
  {
    id: 2,
    title: '프로젝트 데드라인',
    date: '2023-02-12',
    daysLeft: 3,
  },
  {
    id: 3,
    title: '프로젝트 데드라인',
    date: '2023-02-12',
    daysLeft: 3,
  },
  {
    id: 4,
    title: '프로젝트 데드라인',
    date: '2023-02-12',
    daysLeft: 3,
  }

];

const ComponentCalendar = () => {

  const [events, setEvents] = useState([]);

  useEffect(() =>{
    setEvents(mockEvents);
  },[]);

  return (
    <Box p={5} shadow="md" borderWidth="1px" height="100%" >
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold" >캘린더</Text>
        {events.map((event) =>(
          <Box key={event.id} p={3} shadow="sm" borderWidth="1px" width="100%" >
          <Text fontWeight="bold" >{`${event.data} - ${event.title}`} </Text>
          <Text>{`${event.daysLeft}일 남음`}</Text>

          </Box>
        ) ) }
      </VStack>
    </Box>
  );
};

export default ComponentCalendar