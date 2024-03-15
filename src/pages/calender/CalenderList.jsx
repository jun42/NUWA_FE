import { Box, Button, ButtonGroup, Flex, Divider } from '@chakra-ui/react';

import Span from '@components/Span/Span';
const CalenderList = () => {
  return (
    <Box p="86px 0 25px 0">
      <Flex justifyContent="space-between" alignItems="center">
        <Span
          spanText="work"
          spanColor="#fff"
          borderRadius="50px"
          bg="#656565"
          display="inline-block"
          p="6px 22px"
          fontSize="12px"
          fontWeight="500"
          h="26px"
          textAlign="center"
        />
        <ButtonGroup>
          <Button
            color="#656565"
            bg="transparent"
            borderRadius="50px"
            border="1px solid"
            borderColor="#656565"
            fontSize="12px"
            h="26px"
            _active={{
              backgroundColor: '#575DFB',
              color: '#fff',
              border: '1px solid transparent',
            }}
            _focus={{
              outline: 'none',
              backgroundColor: '#575DFB',
              color: '#fff',
              border: '1px solid transparent',
            }}
          >
            미완료
          </Button>
          <Button
            color="#656565"
            bg="transparent"
            border="1px solid"
            borderColor="#656565"
            borderRadius="50px"
            fontSize="12px"
            h="26px"
          >
            완료
          </Button>
        </ButtonGroup>
      </Flex>
      <Divider color="#C0C0C0CC" orientation="horizontal" p="11px 0 0 0" />
    </Box>
  );
};

export default CalenderList;
