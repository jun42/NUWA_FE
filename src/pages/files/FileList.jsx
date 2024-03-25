import React from 'react';

import { Flex, Text, Image } from '@chakra-ui/react';

import illustratorIcon from '@assets/addfiles.png';

const FileList = ({ fileName, sharedBy, date, type, size }) => {
  return (
    <Flex m="15px 0">
      <Flex
        w="52%"
        align="center"
        fontSize="16px"
        fontWeight="400"
        cursor="pointer"
      >
        <Image src={illustratorIcon} m="0 15px" boxSize={'35px'} />
        <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
          {fileName}
        </Text>
      </Flex>
      <Text
        w="12%"
        align="center"
        fontSize="16px"
        fontWeight="400"
        color="#2B2B2B"
      >
        {sharedBy}
      </Text>
      <Text
        w="12%"
        align="center"
        fontSize="16px"
        fontWeight="400"
        color="#2B2B2B"
      >
        {date.substring(0, 10)}
      </Text>
      <Text
        w="12%"
        align="center"
        fontSize="16px"
        fontWeight="400"
        color="#2B2B2B"
      >
        {type}
      </Text>
      <Text
        w="12%"
        align="center"
        fontSize="16px"
        fontWeight="400"
        color="#2B2B2B"
      >
        {size}
      </Text>
    </Flex>
  );
};

export default FileList;
