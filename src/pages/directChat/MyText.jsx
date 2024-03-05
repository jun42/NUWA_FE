import { Box, Flex } from '@chakra-ui/react';

const MyText = ({ content }) => {
  return (
    <Flex width={'100%'} justifyContent={'flex-end'} py="0.5rem" px={'1rem'}>
      <Box
        borderRadius={'10px'}
        width={'45%'}
        bg={'primary.100'}
        py={'14px'}
        px={'30px'}
      >
        {content}
      </Box>
    </Flex>
  );
};

export default MyText;
