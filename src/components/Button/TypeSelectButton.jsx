import { Button, Text } from '@chakra-ui/react';
import React from 'react';

const TypeSelectButton = ({
  fileType,
  setFileType,
  getFilesByType,
  text,
  type,
  workSpaceId,
  setFileList,
}) => {
  return (
    <Text
      width={'100%'}
      p={'10px'}
      borderRadius="8px"
      fontSize="14px"
      fontWeight="500"
      onClick={() => {
        setFileType(type);
        getFilesByType({ type, workSpaceId, setFileList });
      }}
    >
      {text}
    </Text>
  );
};

export default TypeSelectButton;
