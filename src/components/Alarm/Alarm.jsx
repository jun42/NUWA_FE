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
  Box,
} from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa6';
import { alarm_data } from '@constants/selectPlan/SELECT_ALL_INFO';
import AlarmData from '@components/DataBox/AlarmData';
import { useParams } from 'react-router-dom';
import { fetchAlarms } from '@apis/alarm/getAlarm';

const Alarm = () => {
  const { workSpaceId } = useParams();
  const [size, setSize] = useState('');
  const [alarmData, setAlarmData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // 알림 데이터를 가져오는 로직을 호출
    const loadData = async () => {
      const data = await fetchAlarms(workSpaceId, {});
      setAlarmData(data.data.content); // API 응답 구조에 따라 조정
      console.log(data.data.content);
    };

    loadData();
  }, [workSpaceId]); // 워크스페이스 ID가 변경될 때마다 알림 데이터를 새로 가져옵니다.

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
            <Text fontSize={'lg'} fontWeight={'bold'} mb={'10px'}>
              날짜
            </Text>
            {alarmData.map((data, index) => (
              <AlarmData
                key={index}
                boolean={data.isRead}
                url={data.notificationUrl}
                type={data.notificationType}
                count={data.contentCount}
                partner={data.senderName}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Alarm;
