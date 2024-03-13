import { Box, Flex } from '@chakra-ui/react';
import ChatboxContentView from '@components/TextEditorFunctionalComponent/ChatboxContentView';

const MyText = ({ content }) => {
  return (
    <Flex width={'100%'} justifyContent={'flex-end'} py="0.25rem" px={'1rem'}>
      <Box borderRadius={'10px'} width={'45%'} bg={'primary.100'} py={'1px'}>
        <ChatboxContentView content={content} />
      </Box>
    </Flex>
  );
};

export default MyText;
