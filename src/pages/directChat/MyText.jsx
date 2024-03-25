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
  updatePublish,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const backgrounColor = readOnly ? 'primary.100' : 'gray.100';
  return (
    <Flex
      width={'100%'}
      justifyContent={'flex-end'}
      gap={'0.25rem'}
      py="0.8rem"
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
      <Box borderRadius={'10px'} width={'45%'} bg={backgrounColor} py={'1px'}>
        <ChatboxContentView
          content={content}
          isDeleted={isDeleted}
          readOnly={readOnly}
          updatePublish={updatePublish}
          messageId={messageId}
          setReadOnly={setReadOnly}
        />
      </Box>
      {isHover && (
        <MyTextMenu
          isDeleted={isDeleted}
          deleteSocketMessage={deleteSocketMessage}
          messageId={messageId}
          messageType={messageType}
          setReadOnly={setReadOnly}
        />
      )}
    </Flex>
  );
};

export default MyText;
