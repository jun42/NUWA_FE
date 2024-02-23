import React, { useState, useEffect } from 'react'
import { Box, Text, VStack ,Image, Button } from '@chakra-ui/react'
 
const mockFiles = [
  {
    id: 1,
    name: 'report.pdf',
    data: '2023-02-01',
    thumbnail: 'http://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'invoice.pdf',
    data: '2023-02-05',
    thumbnail: 'http://via.placeholder.com/50',
  },
  {
    id: 3,
    name: 'presentation.pptx',
    data: '2023-02-10',
    thumbnail: 'http://via.placeholder.com/50',
  },


];


const ComponentSentfile = () => {

  const [files, setFiles] = useState([]);

  useEffect(() => {
     //api 호출시 대체 로직 구현예정
    setFiles(mockFiles);


  }, []);

 





  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold" >최근 보낸 파일 목록</Text>
        {files.length > 0 ? (
          files.map ((file) => (
        <Box key={file.id} p={3} shadow="sm" borderWidth="1px" width="100%" display="flex" alignItems="center" justifyContent="space-between">

          <Image src={file.thumbnail} alt={file.name} boxSize="50px" />
          <Text> {file.name}</Text>
          <Text fontSize="sm" >{file.data}</Text>
        </Box>
        ))
        ) : (
          <Text>파일이 없습니다.</Text>

        )}
        <Button width="50%" fontSize={16} color="white" borderRadius="full" bgColor="#575DF8" >더 보기 </Button>

      </VStack>


    </Box>
  );
};

export default ComponentSentfile