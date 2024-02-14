import { useState } from 'react';
import SideBar from '@components/SideBar/SideBar';
import search from '../../assets/search.svg';
import switchIcon1 from '../../assets/switchIcon1.svg';
import switchIcon2 from '../../assets/switchIcon2.svg';
import AdobeIcon from '../../assets/AdobeIcon.svg';
import ellipsis_vertical from '../../assets/ellipsis-vertical.svg';

import file_bg from '../../assets/file_bg.jpg';

import {
  Button,
  ButtonGroup,
  IconButton,
  Flex,
  Box,
  Text,
  Avatar,
  Image,
  Divider,
  Switch,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react';

import styled from '@emotion/styled';

import './Files.css';

const ASwitch = styled(Switch)(({ theme, switchState }) => ({
  '& .chakra-switch__track': {
    borderRadius: '22px',
    width: '85px',
    height: '34px',
    position: 'relative',
    backgroundColor: '#434343',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '22px',
      height: '21px',
      backgroundImage: switchState ? `url(${switchIcon1})` : 'none',
      left: '16px',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '20px',
      height: '20px',
      backgroundImage: switchState ? 'none' : `url(${switchIcon2})`,
      right: '16px',
    },
  },
  '& .chakra-switch__thumb': {
    boxShadow: 'none',
    width: '30px',
    height: '30px',
    margin: '2px',
    transform: 'translateX(0px)', // Thumb을 시작 지점에 위치하도록 설정
    transition: 'transform 0.2s ease', // Thumb이 움직일 때 애니메이션 효과 적용
  },
  '& input:checked + .chakra-switch__track .chakra-switch__thumb': {
    transform: 'translateX(51px)',
  },
}));

const Files = () => {
  const [switchState, setSwitchState] = useState(false);
  const handleChange = () => {
    setSwitchState((prev) => !prev);
  };

  return (
    <Flex>
      <SideBar />
      <div className="main">
        <div className="titlef">파일</div>
        <div className="search">
          <img className="search-icon" src={search} alt="" />
          <input
            className="search-input"
            type="text"
            placeholder="파일명으로 검색해주세요."
          />
        </div>
        <Flex height="40px" position="relative" justify="space-between">
          <Flex>
            <Button
              borderRadius="8px"
              bgColor="#242424"
              color="white"
              fontSize="14px"
              fontWeight="500"
              p="12px 26px"
            >
              From 박미송
            </Button>

            <Divider
              orientation="vertical"
              m="0 24px"
              border="1px"
              opacity="10%"
            />
            <ButtonGroup gap="4px">
              <Button
                borderRadius="8px"
                bgColor="#575DFB"
                color="white"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
              >
                모든 파일
              </Button>
              <Button
                border="1px solid #898989"
                borderRadius="8px"
                bgColor="#FFFFFF"
                color="black"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
              >
                사진
              </Button>
              <Button
                border="1px solid #898989"
                borderRadius="8px"
                bgColor="#FFFFFF"
                color="black"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
              >
                파일
              </Button>
              <Button
                border="1px solid #898989"
                borderRadius="8px"
                bgColor="#FFFFFF"
                color="black"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
              >
                ZIP
              </Button>
              <Button
                border="1px solid #898989"
                borderRadius="8px"
                bgColor="#FFFFFF"
                color="black"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
              >
                PDF
              </Button>
            </ButtonGroup>

            <Divider
              orientation="vertical"
              m="0 24px"
              border="1px"
              opacity="10%"
            />
            <ButtonGroup gap="4px">
              <Button
                borderRadius="8px"
                bgColor="#575DFB"
                color="white"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
              >
                날짜 순
              </Button>
              <Button
                border="1px solid #898989"
                borderRadius="8px"
                bgColor="#FFFFFF"
                color="black"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
              >
                이름 순
              </Button>
              <Button
                border="1px solid #898989"
                borderRadius="8px"
                bgColor="#FFFFFF"
                color="black"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
              >
                크기 순
              </Button>
              <Button
                border="1px solid #898989"
                borderRadius="8px"
                bgColor="#FFFFFF"
                color="black"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
              >
                유형 순
              </Button>
            </ButtonGroup>
          </Flex>
          <ASwitch switchState={switchState} onChange={handleChange} />
        </Flex>
        <Box m="64px 0">
          <Text fontSize="22px" fontWeight="500" color="#656565" mb="27px">
            1월18일
          </Text>
          <Wrap spacing="40px">
            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image
                  src={file_bg}
                  w="245px"
                  h="136px"
                  objectFit="cover"
                  borderRadius="13px 13px 0 0"
                />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image
                  src={file_bg}
                  w="245px"
                  h="136px"
                  objectFit="cover"
                  borderRadius="13px 13px 0 0"
                />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image src={AdobeIcon} />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image src={AdobeIcon} />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image src={AdobeIcon} />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>
          </Wrap>
        </Box>
        <Box m="64px 0">
          <Text fontSize="22px" fontWeight="500" color="#656565" mb="27px">
            1월17일
          </Text>
          <Wrap spacing="40px">
            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image
                  src={file_bg}
                  w="245px"
                  h="136px"
                  objectFit="cover"
                  borderRadius="13px 13px 0 0"
                />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image
                  src={file_bg}
                  w="245px"
                  h="136px"
                  objectFit="cover"
                  borderRadius="13px 13px 0 0"
                />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image src={AdobeIcon} />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image src={AdobeIcon} />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image src={AdobeIcon} />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image src={AdobeIcon} />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image src={AdobeIcon} />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>

            <Box w="245px" h="185px">
              <Center
                h="136px"
                backgroundColor="#D6D6D6"
                borderRadius="13px 13px 0 0"
              >
                <Image src={AdobeIcon} />
              </Center>
              <Box
                h="49px"
                backgroundColor="#F1F1F1"
                borderRadius="0 0 13px 13px"
                p="8px 14px"
                position="relative"
              >
                <Text fontSize="12px" fontWeight="600">
                  240118_촬영본 업데이트
                </Text>
                <Text fontSize="10px" fontWeight="500" color="#898989">
                  박미송 1월 18일
                </Text>
                <IconButton
                  size="xs"
                  bgColor="#f1f1f1"
                  icon={<Image src={ellipsis_vertical} alt="" />}
                  position="absolute"
                  top="12px"
                  right="12px"
                />
              </Box>
            </Box>
          </Wrap>
        </Box>
      </div>
    </Flex>
  );
};

export default Files;
