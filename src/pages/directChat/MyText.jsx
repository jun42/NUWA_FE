import { Box, Flex } from '@chakra-ui/react';
import ChatboxContentView from '@components/TextEditorFunctionalComponent/ChatboxContentView';
import { useState } from 'react';
import MyTextMenu from '@components/Menu/MyTextMenu';

const MyText = ({
  content,
  deleteSocketMessage,
  messageId,
  isDeleted,
  messageType,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Flex
      width={'100%'}
      justifyContent={'flex-end'}
      gap={'0.25rem'}
      py="0.25rem"
      px={'1rem'}
      _hover={{ backgroundColor: 'gray.50' }}
      rounded={'lg'}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Box borderRadius={'10px'} width={'45%'} bg={'primary.100'} py={'1px'}>
        <ChatboxContentView content={content} isDeleted={isDeleted} />
      </Box>
      {isHover && (
        <MyTextMenu
          isDeleted={isDeleted}
          deleteSocketMessage={deleteSocketMessage}
          messageId={messageId}
          messageType={messageType}
        />
      )}
    </Flex>
  );
};

export default MyText;
