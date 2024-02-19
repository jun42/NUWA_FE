import { Flex, Box, Image, Text } from '@chakra-ui/react';
import NotCanvas from '@assets/notcanvas.png';
const NotCanvasData = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p="20px"
    >
      <Image src={NotCanvas} alt="Placeholder image" boxSize="150px" />
      <Text fontSize="lg" fontWeight="bold" mb="2">
        캔버스를 찾을 수가 없습니다.
      </Text>
      <Text fontSize="md" fontWeight="bold">
        팀원과 공유 할 수 있는{' '}
        <Box as="span" color="#575DFB">
          캔버스를 작성
        </Box>
        해보세요.
      </Text>
    </Flex>
  );
};

export default NotCanvasData;
