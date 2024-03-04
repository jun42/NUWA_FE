import React, { useState } from 'react';
import BorderCircle from '@assets/border_circle.svg';
import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
//import ProfileEdit from '../profileEdit/ProfileEdit';
import ProfileModal from '@components/Modal/ProfileEdit/index.jsx';
import useModal from '@hooks/useModal';

const mockUserInfo = {
  imageUrl: 'https://via.placeholder.com/100',
  name: '김뿌꾸님',
  position: '직무를 입력하세요',
  email: 'khs43833@gmail.com',
  phone: '010-3571-0000',
};

const ComponentLogin = () => {
  const [userInfo, setUserInfo] = useState(mockUserInfo);
  const { isOpen, onOpen, onClose } = useModal();

  //api 호출시 대체 로직 구현예정
  const handleProfileSave = (updatedProfile) => {
    setUserInfo(updatedProfile);
    onClose();
  };

  return (
    <>
      <Flex
        flexFlow={'column'}
        height={'100%'}
        // border={'1px solid red'}
        align={'center'}
        justify={'center'}
        marginTop={'10px'}
      >
        <Box
          position="relative"
          width="150px"
          height="140px"
          //border={'1px solid green'}
        >
          <Image src={BorderCircle} alt="Background SVG" boxSize="100%" />
          <Image
            position="absolute"
            borderRadius="full"
            boxSize="110px"
            src={userInfo.imageUrl}
            alt="프로필사진"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
          <Box
            position="absolute"
            borderRadius={'full'}
            boxSize={'31px'}
            bg={'#3361FF'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            color={'white'}
            fontWeight={'700'}
            fontSize={'14px'}
            top={'60%'}
            left={'70%'}
          ></Box>
        </Box>
        <Flex
          flexFlow={'column'}
          width={'100%'}
          align={'center'}
          gap={'8px'}
          //border={'1px solid blue'}
        >
          <Box align={'center'}>
            <Text fontSize="20px" fontWeight={'700'}>
              {userInfo.name}
            </Text>
            <Text fontSize="15px" fontWeight={'700'}>
              {userInfo.position}
            </Text>
          </Box>

          <Box align={'center'}>
            <Text fontSize="14px" fontWeight={'500'} color={'#656565'}>
              {' '}
              {userInfo.email}
            </Text>
            <Text fontSize="14px" fontWeight={'500'} color={'#656565'}>
              {' '}
              {userInfo.phone}
            </Text>
          </Box>
          <Button
            mt={'5px'}
            onClick={onOpen}
            width={'80%'}
            height={'100%'}
            p={'8px 0px'}
            fontSize="14"
            color="white"
            borderRadius="full"
            bgColor="#575DF8"
          >
            프로필 편집
          </Button>
        </Flex>
      </Flex>

      <ProfileModal
        isOpen={isOpen}
        onClose={onClose}
        profile={userInfo}
        onSave={handleProfileSave}
      />
    </>
  );
};

export default ComponentLogin;
