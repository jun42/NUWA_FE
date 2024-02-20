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
import ImageCrop from './ImageCrop';
import  { centerCrop, makeAspectCrop } from 'react-image-crop';

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 500;

const ModalBody = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [corpImageSrc, setCorpImageSrc] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    return new Promise((resolve) => {
      reader.onload = () => {
        setCorpImageSrc(reader.result);
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

  const handleLoad = (event) => {
    const { width, height } = event.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;
    const crop = makeAspectCrop(
      {
        unit: '%',
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  return (
    <>
      {corpImageSrc ? (
        <ImageCrop
          src={corpImageSrc}
          crop={crop}
          aspect={ASPECT_RATIO}
          minWidth={MIN_DIMENSION}
          onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
          onLoad={handleLoad}
        />
      ) : (
        <>
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
          <ButtonGroup flexDirection="column" spacing={0} mt="18px">
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <Button
              rounded="50px"
              w="210px"
              p="12px 60px"
              bg="transparent"
              color="#5158FFCC"
              border="solid 2px #5158FFCC"
              onClick={handleButtonClick}
              mb="18px"
            >
              프로필 추가
            </Button>
            <Button
              rounded="50px"
              w="210px"
              p="12px 60px"
              bg="transparent"
              color="#5158FFCC"
              border="solid 2px #5158FFCC"
              mb="18px"
            >
              이미지 자르기
            </Button>
            <Button
              rounded="50px"
              w="210px"
              p="12px 60px"
              bg="transparent"
              color="#5158FFCC"
              border="solid 2px #5158FFCC"
              mb="18px"
            >
              설정하지 않기
            </Button>
          </ButtonGroup>
        </>
      )}
    </>
  );
};

export default ModalBody;
