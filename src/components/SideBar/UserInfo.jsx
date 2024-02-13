import React from 'react';

import profile from '../../assets/cham.png';
import active from '../../assets/active.svg';

import {
    Flex,
    Box,
    Text,
    Avatar,
    Image,
  } from '@chakra-ui/react';

const UserInfo = () => {
  return (
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
        borderRadius="70%"
        m="28px"
      >
        <Avatar size="2xl" src={profile} />
      </Flex>
      <Box m="13px 0">
        <Text fontSize="16px" fontWeight="900" color="#656565">
          김뿌꾸님
        </Text>
        <Text fontSize="14px" fontWeight="500" color="#656565">
          khs43833@gmail.com
        </Text>
      </Box>
      <Flex fontSize="14px" fontWeight="500" color="#898989">
        <Image src={active} alt="" m="0 3px" />
        현재 활동 중
      </Flex>
    </Flex>
  );
};

export default UserInfo;
