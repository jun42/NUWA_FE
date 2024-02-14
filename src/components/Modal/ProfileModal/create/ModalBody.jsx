import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Image,
  Square,
  Text,
} from '@chakra-ui/react';
import UserImg from '@assets/user.svg';
import { useRef, useState } from 'react';

const ModalBody = () => {
  const [imageSrc, setImageSrc] = useState('');
  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <Divider color="rgba(0, 0, 0, 0.1)" />
      <Flex m="16px 0">
        <Square bg="rgba(57, 51, 235, 0.566)" w={120} h={120}>
          <Image
            objectFit="cover"
            boxSize={imageSrc ? '100%' : '70px'}
            src={imageSrc ? imageSrc : UserImg}
          />
        </Square>
        <Box ml="20px">
          <Flex justifyContent="space-between">
            <Text fontSize="lg" fontWeight={600}>
              <Text fontSize="md" fontWeight={500} color="#898989">
                이름
              </Text>
              김선미
            </Text>
            <Text fontSize="lg" fontWeight={600}>
              <Text fontSize="md" fontWeight={500} color="#898989">
                직무
              </Text>
              프론트엔드
            </Text>
          </Flex>
          <Text mt="20px" fontSize="lg" fontWeight={600}>
            <Text fontSize="md" fontWeight={500} color="#898989">
              이메일
            </Text>{' '}
            tjsalsun@gmail.com
          </Text>
        </Box>
      </Flex>
      <Divider color="rgba(0, 0, 0, 0.1)" />
      <ButtonGroup flexDirection="column" spacing={0}>
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <Button onClick={handleButtonClick}>프로필 추가</Button>
        <Button>이미지 자르기</Button>
        <Button>설정하지 않기</Button>
      </ButtonGroup>
    </div>
  );
};

export default ModalBody;
