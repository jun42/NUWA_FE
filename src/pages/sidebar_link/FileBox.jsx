import React, { useState } from 'react';
import ellipsis_vertical from '../../assets/ellipsis-vertical.svg';
import download from '../../assets/download.svg';
import share from '../../assets/share.svg';
import share2 from '../../assets/share2.svg';

import file_bg from '../../assets/file_bg.jpg';
import Modal from '../../components/Modal/Modal.jsx';
import profile from '../../assets/cham.png';
import AdobeIcon from '../../assets/AdobeIcon.svg';

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
  Input,
  useDisclosure,
} from '@chakra-ui/react';

const FileBox = ({ fileName, sharedBy, date, type, size, src }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImg, setSelectedImg] = useState('');

  return (
    <Box
      w="245px"
      h="185px"
      cursor="pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        onOpen();
        setSelectedImg(
          e.currentTarget.querySelector('img').getAttribute('src')
        );
      }}
    >
      {src !== '' && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          modalTitle={
            <Flex align="center">
              <Avatar size="md" src={profile} />
              <Box ml="10px">
                <Text fontSize="16px" fontWeight="600">
                  {sharedBy}
                </Text>
                <Text fontSize="12px" fontWeight="400">
                  14일전 확인됨
                </Text>
              </Box>
            </Flex>
          }
          children={<Image src={selectedImg} objectFit="cover" />}
        />
      )}
      <Center h="136px" backgroundColor="#D6D6D6" borderRadius="13px 13px 0 0">
        {src === '' && <Image src={AdobeIcon} />}
        {src !== '' && (
          <Image
            src={src}
            w="245px"
            h="136px"
            objectFit="cover"
            borderRadius="13px 13px 0 0"
          />
        )}
      </Center>
      <Box
        h="49px"
        backgroundColor="#F1F1F1"
        borderRadius="0 0 13px 13px"
        p="8px 14px"
        position="relative"
      >
        <Text fontSize="12px" fontWeight="600">
          {/* 18자 넘으면 줄임표 */}
          {fileName}
        </Text>
        <Text fontSize="10px" fontWeight="500" color="#898989">
          {sharedBy} {date}
        </Text>
        <Flex>
          <IconButton
            size="xs"
            bgColor="#f1f1f1"
            icon={<Image src={download} alt="" />}
            position="absolute"
            top="12px"
            right="60px"
            onClick={(e) => {
              e.stopPropagation();
            }}
            display={isHovered ? 'center' : 'none'}
          />
          <IconButton
            size="xs"
            bgColor="#f1f1f1"
            icon={<Image src={share2} boxSize="18px" alt="" />}
            position="absolute"
            top="12px"
            right="36px"
            onClick={(e) => {
              e.stopPropagation();
            }}
            display={isHovered ? 'center' : 'none'}
          />
          <IconButton
            size="xs"
            bgColor="#f1f1f1"
            icon={<Image src={ellipsis_vertical} alt="" />}
            position="absolute"
            top="12px"
            right="12px"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default FileBox;
