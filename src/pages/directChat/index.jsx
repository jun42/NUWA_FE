import { Box, Textarea } from '@chakra-ui/react';
import DirectChatHeader from './DirectChatHeader';

const DirectChatPage = () => {
  return (
    <Box width="100%" p={'0.5rem'}>
      <DirectChatHeader />
      <Box height={'70vh'} border={'1px'}></Box>
      <Box border={'1px'} height={'15vh'}>
        <Textarea resize={'none'} />
      </Box>
    </Box>
  );
};

export default DirectChatPage;
