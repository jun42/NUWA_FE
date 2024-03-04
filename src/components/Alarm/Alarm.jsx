import React, { useState, useEffect } from 'react';
import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Flex,
  Text,
  CloseButton,
  Divider,
} from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa6';
import { alarm_data } from '@constants/selectPlan/SELECT_ALL_INFO';
import AlarmData from '@components/DataBox/AlarmData';
import { useParams } from 'react-router-dom';
const Alarm = () => {
  const { workSpaceId } = useParams();
  const [size, setSize] = useState('');
  const [alarmData, setlArmData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ['sm'];

  return (
    <>
      {sizes.map((size) => (
        <IconButton
          icon={<FaBell size={'20px'} color="#575DFB" />}
          bgColor={'grey.700'}
          _hover={'grey.700'}
          _active={'grey.700'}
          onClick={() => handleClick(size)}
          key={size}
        ></IconButton>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerContent>
          <Flex justify={'space-between'} align={'center'} p={'10px 24px'}>
            <Text fontSize={'lg'} fontWeight={'bold'}>
              알림
            </Text>
            <CloseButton onClick={onClose} />
          </Flex>
          <Divider orientation="horizontal" mb={'10px'} />
          <DrawerBody display={'flex'} flexFlow={'column'} gap={'10px'}>
            {alarm_data.map((data, index) => (
              <AlarmData key={index} name={data.name} date={data.date} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Alarm;
