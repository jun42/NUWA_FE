import { Box, Flex, Input } from '@chakra-ui/react';

const CreateChannelNameInput = () => {
  return (
    <Flex flexDirection={'column'}>
      <Box>채널 이름</Box>
      <Box>
        <Input type="text" fontSize={'16px'} fontWeight={'500'} />
      </Box>
    </Flex>
  );
};

export default CreateChannelNameInput;
