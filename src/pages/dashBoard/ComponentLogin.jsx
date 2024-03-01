import React, { useState } from 'react'
import {Box, Image, Text, Button, VStack, Flex, useDisclosure} from '@chakra-ui/react';
import ProfileEdit from '../profileEdit/ProfileEdit';

const mockUserInfo = {
  imageUrl: 'https://via.placeholder.com/100',
  name: '김뿌꾸님',
  position: '프론트엔드 개발',
  email: 'khs43833@gmail.com' ,
  phone: '010-3571-0000'
}



const ComponentLogin = () => {
   const [userInfo, setUserInfo] = useState(mockUserInfo);
   const { isOpen, onOpen, onClose } = useDisclosure();

   //api 호출시 대체 로직 구현예정
   const handleProfileSave = (updatedProfile) => {
    setUserInfo(updatedProfile);
    onClose();
   };

   return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="1px" >
      <VStack spacing={4} align="center">
      <Image  
         borderRadius="full"
         boxSize="100px"
         src={userInfo.imageUrl}
         alt="프로필사진"     
         />
         <Text fontSize="xl" > {userInfo.name}</Text>
         <Text fontSize="md" > {userInfo.position}</Text>
         <Text fontSize="sm" > {userInfo.email}</Text>
         <Text fontSize="sm" > {userInfo.phone}</Text>
         <Flex w="full" justify="center">
          <Button onClick={onOpen} width="50%" margin="20px" fontSize="16" color="white" borderRadius="full" bgColor="#575DF8" >프로필 편집 </Button>

         </Flex>




      </VStack>

      <ProfileEdit isOpen={isOpen} onClose={onClose} profile={userInfo} onSave={handleProfileSave}
      />
 

    </Box> 
  )
}

export default ComponentLogin