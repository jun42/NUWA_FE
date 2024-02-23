import React, { useState, useRef } from 'react';
import {
  Text,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  InputGroup,
  Flex,
} from '@chakra-ui/react';
import styled from 'styled-components';

const ModalBody = () => {
  const [fileName, setFileName] = useState('');
  const [workspaceName, setWorkspaceName] = useState('NUWA_project');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleNameChange = (e) => {
    setWorkspaceName(e.target.value);
  };
  return (
    <StContainer>
      <Text>
        워크스페이스의 이름을 수정하거나 워크스페이스의 이미지를 수정 또는
        추가할 수 있으며 다른 사용자에게 표시됩니다.
      </Text>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="workspace-name">워크스페이스 이름</FormLabel>
          <Input
            id="workspace-name"
            value={workspaceName}
            onChange={handleNameChange}
            borderRadius={'3px'}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workspace-image">워크스페이스 아이콘</FormLabel>
          <InputGroup size="md">
            <Input
              value={fileName}
              placeholder="선택된 이미지 없음"
              readOnly
              borderRadius={'3px'}
            />
            <Button
              as="label"
              colorScheme="blue"
              ml={2}
              borderRadius={'3px'}
              fontSize={'14px'}
              cursor={'pointer'}
              bg={'#979797'}
              _hover={{ bg: '#747474' }}
              _active={{ bg: '#747474  ' }}
            >
              파일선택
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                accept="image/*"
              />
            </Button>
          </InputGroup>
        </FormControl>

        <Button
          width={'100%'}
          borderRadius={'3px'}
          bg={'#5158FF'}
          _hover={{ bg: '#4147f8' }}
          _active={{ bg: '#4147f8  ' }}
          color={'white'}
          mt={'40px'}
        >
          수정하기
        </Button>
      </VStack>
    </StContainer>
  );
};

export default ModalBody;

const StContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`;
