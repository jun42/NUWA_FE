import React, { useState } from 'react';

import profile from '../../assets/cham.png';
import active from '../../assets/active.svg';

import { Flex, Box, Text, Avatar, Image } from '@chakra-ui/react';
import StateModal from '@components/Modal/StateModal';
import useModal from '@hooks/useModal';
const UserInfo = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const [userInfo, setUserInfo] = useState('현재 활동 중');
  const [selectedState, setSelectedState] = useState({
    icon: active,
    title: '현재 활동 중',
  });

  const handleStateChange = (newState) => {
    setSelectedState(newState);
    setUserInfo(newState.title);
  };
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        m="20px 0"
        position="relative"
      >
        <Box
          w="30px"
          h="30px"
          fontSize="12px"
          fontWeight="900"
          color="white"
          backgroundColor="#3361ff"
          borderRadius="70%"
          lineHeight="30px"
          position="absolute"
          right="75px"
          bottom="130px"
          zIndex="10"
        >
          2
        </Box>
        <Flex
          justify="center"
          align="center"
          w="150px"
          h="150px"
          border="2px solid #3361ff"
          borderRight="2px solid #DADEE6"
          borderRadius="70%"
          m="28px"
        >
          <Avatar size="2xl" src={profile} />
        </Flex>
        <Box m="13px 0">
          <Text fontSize="16px" fontWeight="900" color="#656565">
            김뿌꾸 님
          </Text>
          <Text fontSize="14px" fontWeight="500" color="#656565">
            khs43833@gmail.com
          </Text>
        </Box>
        <Flex
          fontSize="14px"
          fontWeight="500"
          color="#898989"
          cursor={'pointer'}
          onClick={onOpen}
          align={'center'}
          justify="center"
        >
          <Image src={selectedState.icon} alt="" m="0 3px" boxSize={'14px'} />
          {userInfo}
        </Flex>
      </Flex>
      <StateModal
        isOpen={isOpen}
        onClose={onClose}
        onStateChange={handleStateChange} // 상태 변경 콜백 함수를 props로 전달
      />
    </>
  );
};

export default UserInfo;
