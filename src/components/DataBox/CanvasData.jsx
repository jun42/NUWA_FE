import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
const CanvasData = ({ name, date }) => {
  return (
    <Box
      display={'flex'}
      gap={'10px'}
      border={'1px solid grey'}
      padding={'12px'}
      borderRadius={'10px'}
    >
      <Box boxSize={'42px'} borderRadius={'8px'} bgColor={'grey'} />
      <Flex flexFlow={'column'}>
        <Text fontSize={'16px'} fontWeight={'500'}>
          {name}
        </Text>
        <Text fontSize={'14px'} fontWeight={'500'}>
          {date}
        </Text>
      </Flex>
    </Box>
  );
};

export default CanvasData;
