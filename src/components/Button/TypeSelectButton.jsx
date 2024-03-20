import { Button } from '@chakra-ui/react';
import React from 'react';

const TypeSelectButton = (fileType, setFileType, getFilesByType, text, type) => {
  return (
    <Button
      borderRadius="8px"
      fontSize="14px"
      fontWeight="500"
      p="12px 26px"
      bgColor={fileType === type ? '#575DFB' : '#FFFFFF'}
      color={fileType === type ? 'white' : 'black'}
      _hover={fileType === type ? { bgColor: '#575DFB' } : undefined}
      border={fileType === type ? '1px solid #575DFB' : '1px solid #898989'}
      onClick={() => {
        setFileType({ fileType });
        getFilesByType({ fileType });
      }}
    >
      {text}
    </Button>
  );
};

export default TypeSelectButton;
