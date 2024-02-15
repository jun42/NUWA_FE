import React from 'react'
import {Box, Image, Text, Button, VStack, Flex } from '@chakra-ui/react';

const mockUserInfo = {
  imageUrl: 'https://via.placeholder.com/100',
  name: '김뿌꾸님',
  position: '프론트엔드 개발',
  email: 'suj2n.k@gmail.com' ,
  phone: '010-8420-0000'
}



const ComponertOne = () => {
   const [userInfo, setUserInfo] = userState(mockUserInfo);

   //api 호출시 대체 로직 구현예정
   
   return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="1g" >
      <VStack spacing={4} align='center'
       >
      <Image  
         borderRadius="full"
         boxSize="100px"
         src={userInfo.imageUrl}
         alt="프로필사진"     
         />


      </VStack>
 

    </Box> 
  )
}

export default ComponertOne