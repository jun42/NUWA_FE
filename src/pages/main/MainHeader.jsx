import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';
import mainTool from '@assets/mainTool.png';
import mainImage from '@assets/mainImage.png';

const MainHeader = () => {
  return (
    <Box
      width="100%"
      padding="10px 30px"
      backgroundColor="#F8F9FB"
      border="1px solid blue"
    >
      <Flex
        width="1440px"
        marginLeft={'148px'}
        justifyContent="space-between"
        alignItems="center"
        border="1px solid red"
      >
        <Flex
          flexDirection="column"
          //gap="102px"
          width="600px"
          //paddingY="32px"
          border="1px solid black"
        >
          <Box border="1px solid red" margin="30px 0px">
            <Text fontSize="48px" fontWeight="720">
              생산성 향상을 위한
              <br />
              간편한 협업툴
            </Text>
          </Box>

          <Box border="1px solid red">
            <Text fontSize="18px" fontWeight="420">
              필요없는 기능으로 복잡해진 협업툴은 그만!
              <br />
              간편하게 다이렉트 메세지와 채팅, 파일공유
              <br />
              메일을 사용해보세요.
            </Text>
          </Box>

          <Box border="1px solid red" marginTop="180px">
            <Button
              width="45%"
              fontSize="16px"
              fontWeight="700"
              color="white"
              bgColor="#575DF8"
              borderRadius="full"
            >
              무료로 시작하기
            </Button>
          </Box>
        </Flex>

        <Box border="1px solid black">
          <Image src={mainImage} alt="메인 툴 이미지" boxSize="full" />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainHeader;
