import React, { useState, useEffect } from 'react'
import { Box, Image, Text, VStack, Flex, IconButton, HStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'


const mockTeamMembers = [
  {
    id: 1,
    name: '엘모',
    position: '프론트엔드 개발',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTAyMTJfMTk4%2FMDAxNTQ5OTI3ODk2MTA3.R_tSSreW3R-6u1XJFmzZ9Hfj4FAi26s3Yuzk9Kwzu14g.ZVhvrD5aO1zLPx79fPRbJylDmAy1_GOYputS92nLXGAg.JPEG.extra_ry%2FexternalFile.jpg&type=sc960_832',
    email: 'elmo@gmail.com', 
  },
  {
    id: 2,
    name: '쿠키몬스터',
    position: 'UX/UI',
    imageUrl: 'https://search.pstatic.net/sunny/?src=http%3A%2F%2Fthumbnail.10x10.co.kr%2Fwebimage%2Fimage%2Fadd2_600%2F141%2FA001410223_02.jpg%3Fcmd%3Dthumb%26w%3D500%26h%3D500%26fit%3Dtrue%26ws%3Dfalse&type=sc960_832',
    email: 'cookiemonster@gmail.com', 
  },
  {
    id: 3,
    name: '어니',
    position: '백엔드 개발',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDlfMjE1%2FMDAxNjczMjYyODAwOTgx.1a_WAvDlM3gm3GSFJuKz1fql3yprKbvEsy0yJp-RW4og.d25ptjFJSn6RfcPy1MQrESX8RESTMdwQbgEW2R-_9Yog.JPEG.jobobo12%2FIMG_7790.JPG&type=sc960_832',
    email: 'ERNIEEEEEE@gmail.com', 
  },
  {
    id: 4,
    name: '버트',
    position: 'UX/UI',
    imageUrl: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab6761610000e5eb993d734a1a35899b2e1ea61b&type=sc960_832',
    email: 'Bert@gmail.com', 
  },
  {
    id: 5,
    name: '베이비베어',
    position: '백엔드 개발',
    imageUrl: 'https://i.namu.wiki/i/hKcpVUZHaOLxF2mdQirR9KHW0mv79h20JNmnvh9-VQuwDUzcfYQmb5W6TP_-fIejGDWWuh6FOcm9ujEX-d4wzxAuJ2ZFwD2_6JfJ01KRWM4mUfkg7XV8B-IZvdcLsFvIe-W-71tQwSVwnY4PhrmOew.webp',
    email: 'BabyBear@gmail.com', 
  },
]



const ComponentFavorite = () => {

  const [teamMembers, setTeamMembers] =useState([]);


   useEffect (() => {

   //api 호출시 대체 로직 구현예정
   setTeamMembers(mockTeamMembers);
   }, []); 




  return (
    <Box p={5} shadow="md" borderWidth="1px" overflowX="auto"  >
        <Text fontSize="xl" fontWeight="bold"  mb={4}>즐겨찾기에 저장 된 팀원</Text>
        <HStack spacing={4} align="start">
        {teamMembers.slice(0, 5).map((member) => (
          <VStack key={member.id} p={3} shadow="sm" borderWidth="1px" borderRadius="1g" spacing={4} align="center" >
            <Image src={member.imageUrl} alt={member.name} boxSize="100px" borderRadius="full" />
              <Text fontWeight="bold">{member.name}</Text>
              <Text fontSize="sm">{member.position}</Text>
              <Text fontSize="sm">{member.email}</Text>
            </VStack>
        
        ))}
         </HStack>

        {teamMembers.length > 4 && (
          <Flex justifyContent="center" mt={2} padding="40px">
            <IconButton aria-label="Scroll left"  icon={<ChevronLeftIcon/>} mr={2}/>
            <IconButton arid-label="Scroll right" icon={<ChevronRightIcon/>} />

          </Flex>
        )}
  

    </Box>
  );
};

export default ComponentFavorite