import { Box, Flex, Input } from '@chakra-ui/react';

const CreateChannelNameInput = ({ channelName, setChannelName }) => {
  return (
    <Flex flexDirection={'column'} gap={2}>
      <Box fontSize={'14px'} fontWeight={500} color={'grey.600'}>
        채널 이름
      </Box>
      <Box>
        <Input
          type="text"
          fontSize={'16px'}
          fontWeight={600}
          color={'black'}
          value={channelName}
          onChange={(e) => {
            setChannelName(e.target.value);
          }}
        />
      </Box>
    </Flex>
  );
};

export default CreateChannelNameInput;
