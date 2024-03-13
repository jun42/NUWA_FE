import React, { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  Image,
  Center,
  IconButton,
  Button,
} from '@chakra-ui/react';
import bluedot from '../../assets/blue-dot.svg';
import emptydot from '../../assets/empty-dot.svg';
import add_colored from '../../assets/add_colored.svg';
import ellipsis_vertical2 from '../../assets/ellipsis-vertical2.svg';
import share2 from '../../assets/share2.svg';

import Example from './example';

const Todo = () => {
  return (
    <Flex w="100%">
      <Box
        w="100%"
        p="52px 63px"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        h="100%"
        overflowY="scroll"
      >
        <Text fontSize="40px" fontWeight="600">
          TO DO LIST
        </Text>
        <Flex gap="20px">
          <Box w="50%">
            <Box
              backgroundColor="#F1F1F1"
              h="114px"
              p="20px"
              borderRadius="8px"
            >
              <Flex justify="space-between">
                <Flex align="center" gap="10px">
                  <Text fontSize="28px" fontWeight="600">
                    하루
                  </Text>
                  <Text fontSize="16px" fontWeight="600" color="#656565">
                    2024-01-08
                  </Text>
                </Flex>
                <Flex>
                  <IconButton
                    size="sm"
                    bgColor="#f1f1f1"
                    icon={<Image src={share2} alt="" />}
                  />
                  <IconButton
                    size="sm"
                    bgColor="#f1f1f1"
                    icon={<Image src={ellipsis_vertical2} alt="" />}
                  />
                </Flex>
              </Flex>
              <Flex gap="5px">
                <Center
                  w="68px"
                  h="31px"
                  backgroundColor="#575DFB"
                  borderRadius="15.5px"
                  border="1px solid #575DFB"
                >
                  <Text fontSize="16px" fontWeight="600" color="white">
                    진행중
                  </Text>
                </Center>
                <Center
                  w="68px"
                  h="31px"
                  borderRadius="15.5px"
                  border="1px solid #898989"
                >
                  <Text fontSize="16px" fontWeight="600" color="#898989">
                    완료
                  </Text>
                </Center>
              </Flex>
            </Box>
            <Box>
              <Example />
            </Box>
            <Flex h="80px" align="center">
              <Flex>
                <Button backgroundColor="transparent" ml="5px">
                  <Image src={add_colored} mr="10px" />
                  <Text fontSize="20px" fontWeight="500">
                    작업추가
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box w="50%">
            <Box backgroundColor="#F1F1F1" h="114px">
              프로젝트 팀
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Todo;
