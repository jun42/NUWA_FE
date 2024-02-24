import React, { useState } from 'react';
import {
  Box,
  Grid,
  Text,
  Button,
  Link,
  Image,
  VStack,
  Center,
  Flex,
} from '@chakra-ui/react';
import { state_seticon } from '@constants/selectPlan/SELECT_STATE_INFO';
const ModalBody = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  return (
    <>
      <VStack spacing={4}>
        {/* 그룹 */}
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {state_seticon.map((state, i) => (
            <Flex key={i} flexFlow={'column'} align={'center'} gap={'12px'}>
              <Box
                w="110px"
                h="110px"
                bg="gray.200"
                p={4}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={'15px'}
                cursor={'pointer'}
                border={selectedBox === i ? '2px solid #575DFB' : 'none'}
                onClick={() => setSelectedBox(i)}
              >
                {/* 아이콘 이미지 또는 컴포넌트를 여기에 표시 */}
                <Image src={state.icon} boxSize="60px" />
              </Box>
              <Text fontWeight={'bold'} fontSize={'sm'}>
                {state.title}
              </Text>
            </Flex>
          ))}
        </Grid>

        {/* 링크와 버튼 */}
        <Flex justify={'space-between'} width={'100%'} align={'center'}>
          <Link href="#" color={'#575DFB'} fontSize={'16px'}>
            Nuwa_Project를 위한 제안 항목 편집
          </Link>
          <Button
            height={'30px'}
            padding={'0px 40px'}
            borderRadius={'full'}
            bg={'#575DFB'}
            color={'white'}
            fontSize={'14px'}
          >
            저장
          </Button>
        </Flex>
      </VStack>
    </>
  );
};

export default ModalBody;
