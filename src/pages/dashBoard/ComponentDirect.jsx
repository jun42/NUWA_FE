import React, { useState, useEffect } from 'react'
import { Box, VStack, Text } from '@chakra-ui/react'

const mockMessages = [{
  id: 1,
  sender: '쿠키몬스터',
  summary: '프로젝트 회의 일정 확인해주세요.',
  receivedAt: '2023-02-15',
},
{
  id: 2,
  sender: '버트',
  summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
  receivedAt: '2023-02-14'
},
{
  id:3,
  sender: '빅버드',
  summary: '보고서 전송 부탁드립니다.',
  receivedAt: '2023-02-08'

}


]

const ComponentDirect = () => {

  const [ messages, setMessages ] = useState([]);
  
  useEffect( () => {
    //api 호출시 대체 로직 구현예정
    setMessages(mockMessages);

  }, []);

   

  return (
    <Box p={5} shadow="md" borderWidth="1px"  >
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">최근 받은 메세지</Text>
        {messages.length > 0 ? (
        messages.map ((message) => (
          <Box key={message.id} p={3} shadow="sm" borderWidth="1px" width="100%" >
            <Text fontWeight="bold">{message.sender} </Text>
            <Text>{message.summary} </Text>
            <Text fontSize="sm">{message.receivedAt}</Text>

          </Box>
        ))
        ) : (
          <Text>메세지가 없습니다,</Text>
        )}
      </VStack>
    </Box>
  );
};

export default ComponentDirect