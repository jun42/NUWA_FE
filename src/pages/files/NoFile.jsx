import React from 'react';
import nofile from '@assets/nofile.png';
import { Center, Image, Text } from '@chakra-ui/react';

const NoFile = () => {
  return (
    <Center w="100%" h="100%" flexDir="column" fontSize="20px" fontWeight="600">
      <Image src={nofile} />
      <Text>파일을 찾을 수가 없습니다.</Text>
      <Text display="flex">
        팀원과
        <Text color="#575DFB" m="0 5px">
          파일 공유
        </Text>
        를 해보세요.
      </Text>
    </Center>
  );
};

export default NoFile;