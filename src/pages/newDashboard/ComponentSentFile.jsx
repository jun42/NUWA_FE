import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  Image,
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import FilesIconTitle from '@assets/files_icon.svg';
const mockFiles = [
  {
    id: 1,
    name: 'report.pdf',
    date: '2023-02-01',
    type: 'jpg파일',
    size: '122KB',
  },
  {
    id: 2,
    name: 'invoice.pdf',
    date: '2023-02-05',
    type: 'jpg파일',
    size: '122KB',
  },
  {
    id: 3,
    name: 'presentation.pptx',
    date: '2023-02-10',
    type: 'jpg파일',
    size: '122KB',
  },
  {
    id: 3,
    name: 'presentation.pptx',
    date: '2023-02-10',
    type: 'jpg파일',
    size: '122KB',
  },
  {
    id: 3,
    name: 'presentation.pptx',
    date: '2023-02-10',
    type: 'jpg파일',
    size: '122KB',
  },
  {
    id: 3,
    name: 'presentation.pptx',
    date: '2023-02-10',
    type: 'jpg파일',
    size: '122KB',
  },
];

const ComponentSentfile = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    //api 호출시 대체 로직 구현예정
    setFiles(mockFiles);
  }, []);

  return (
    <>
      <Flex
        borderTopRadius={'10px'}
        display={'flex'}
        height={'14%'}
        p={'10px 15px'}
        align={'center'}
        bg={'#F5F5F5'}
        gap={'10px'}
      >
        <Image src={FilesIconTitle} />
        <Text fontSize="16px" fontWeight="bold" align={'center'}>
          최근 보낸 파일 목록
        </Text>
      </Flex>

      <Box borderWidth="1px" height={'86%'} overflowY={'auto'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>파일명</Th>
              <Th>날짜</Th>
              <Th>유형</Th>
              <Th>크기</Th>
            </Tr>
          </Thead>
          <Tbody>
            {files.length > 0 ? (
              files.map((file, index) => (
                <Tr key={index}>
                  <Td>{file.name}</Td>
                  <Td>{file.date}</Td>
                  <Td>{file.type}</Td>
                  <Td>{file.size}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="4" textAlign="center">
                  파일이 없습니다.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default ComponentSentfile;
