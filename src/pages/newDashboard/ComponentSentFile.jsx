import { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Image,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import FilesIconTitle from '@assets/files_icon.svg';
import { useParams } from 'react-router-dom';
import { getTopFiles } from '@apis/dashboard/getTopFiles';

const ComponentSentfile = () => {
  const [files, setFiles] = useState([]);
  const { workSpaceId } = useParams();

  useEffect(() => {
    const loadTopSevenFiles = async () => {
      try {
        const response = await getTopFiles(workSpaceId);
        if (response.data.status === 'success') {
          setFiles(response.data.data);
        } else {
          console.error('파일 정보를 불러오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadTopSevenFiles();
  }, [workSpaceId]);

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
                  <Td>{file.fileName}</Td>
                  <Td>{file.createdAt}</Td>
                  <Td>{file.fileExtension}</Td>
                  <Td>{file.fileSize}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="4" fontSize={'16px'} textAlign="center">
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
