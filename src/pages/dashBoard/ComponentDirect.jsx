import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Flex, Image } from '@chakra-ui/react';
import DirectMessageIcon from '@assets/message_icon.svg';
const mockMessages = [
  {
    id: 1,
    sender: '쿠키몬스터',
    imageUrl: 'https://via.placeholder.com/100',
    summary: '프로젝트 회의 일정 확인해주세요.',
    receivedAt: '2023-02-15',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '버트',
    summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
    receivedAt: '2023-02-14',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '버트',
    summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
    receivedAt: '2023-02-14',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '버트',
    summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
    receivedAt: '2023-02-14',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '버트',
    summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
    receivedAt: '2023-02-14',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '버트',
    summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
    receivedAt: '2023-02-14',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '버트',
    summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
    receivedAt: '2023-02-14',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '버트',
    summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
    receivedAt: '2023-02-14',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '버트',
    summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
    receivedAt: '2023-02-14',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '버트',
    summary: '금주 중으로 미팅 가능한 날짜 회신바랍니다.',
    receivedAt: '2023-02-14',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/100',
    sender: '빅버드',
    summary: '보고서 전송 부탁드립니다.',
    receivedAt: '2023-02-08',
  },
];

const ComponentDirect = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //api 호출시 대체 로직 구현예정
    setMessages(mockMessages);
  }, []);

  return (
    <>
      <Flex
        borderTopRadius={'10px'}
        display={'flex'}
        p={'10px 15px'}
        align={'center'}
        height={'14%'}
        bg={'#F5F5F5'}
        gap={'10px'}
      >
        <Image src={DirectMessageIcon} />
        <Text fontSize="16px" fontWeight="bold" align={'center'}>
          최근 받은 메세지
        </Text>
      </Flex>

      <Box
        padding={'20px'}
        height={'86%'}
        overflowY={'auto'}
        borderBottom={'1px solid #D9D9D9'}
        display={'flex'}
        flexFlow={'column'}
        gap={'12px'}
      >
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <Box
              key={index}
              borderWidth="1px"
              width="100%"
              display={'flex'}
              gap={'10px'}
            >
              <Image
                borderRadius="full"
                boxSize="45px"
                src={message.imageUrl}
                alt="프로필사진"
              />

              <Flex flexFlow={'column'} width={'100%'}>
                <Flex align={'center'} justify={'space-between'}>
                  <Text fontSize={'16px'} fontWeight={'700'}>
                    {message.sender}{' '}
                  </Text>
                  <Text fontSize={'12px'} fontWeight={'700'}>
                    {message.receivedAt}
                  </Text>
                </Flex>
                <Text width={'80%'}>{message.summary} </Text>
              </Flex>
            </Box>
          ))
        ) : (
          <Text>메세지가 없습니다,</Text>
        )}
      </Box>
    </>
  );
};

export default ComponentDirect;
