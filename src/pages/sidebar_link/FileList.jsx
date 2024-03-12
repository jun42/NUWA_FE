import React from 'react';

import { Flex, Text, Image } from '@chakra-ui/react';

import illustratorIcon from '../../assets/illustratorIcon.svg';

const FileList = ({ fileName, sharedBy, date, type, size }) => {
  return (
    <Flex m="15px 0">
      <Flex
        w="52%"
        align="center"
        fontSize="18px"
        fontWeight="600"
        cursor="pointer"
      >
        <Image src={illustratorIcon} m="0 15px" />
        <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
          {fileName}
        </Text>
      </Flex>
      <Text
        w="12%"
        align="center"
        fontSize="18px"
        fontWeight="600"
        color="#2B2B2B"
      >
        {sharedBy}
      </Text>
      <Text
        w="12%"
        align="center"
        fontSize="18px"
        fontWeight="600"
        color="#2B2B2B"
      >
        {date.substring(0, 10)}
      </Text>
      <Text
        w="12%"
        align="center"
        fontSize="18px"
        fontWeight="600"
        color="#2B2B2B"
      >
        {type}
      </Text>
      <Text
        w="12%"
        align="center"
        fontSize="18px"
        fontWeight="600"
        color="#2B2B2B"
      >
        {size}
      </Text>
    </Flex>
  );
};

export default FileList;
