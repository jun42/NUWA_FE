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
import AlarmData from '@components/DataBox/AlarmData';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { groupAlarmsByDateThenSender } from '@utils/alarm.js';
import { fetchAlarms } from '@apis/alarm/fetchAlarms';

const Alarm = () => {
  const { workSpaceId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useQuery({
    queryKey: ['alarms', workSpaceId],
    queryFn: fetchAlarms,
    select: (data) => groupAlarmsByDateThenSender(data), // 데이터 변환
  });

  return (
    <>
      <IconButton
        icon={<FaBell size="20px" color="#575DFB" />}
        bgColor="grey.700"
        _hover={{ bgColor: 'grey.700' }}
        _active={{ bgColor: 'grey.700' }}
        onClick={onOpen}
      />

      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerContent>
          <Flex justify="space-between" align="center" p="10px 24px">
            <Text fontSize="lg" fontWeight="bold">
              알림
            </Text>
            <CloseButton onClick={onClose} />
          </Flex>
          <Divider orientation="horizontal" mb="10px" />
          <DrawerBody display="flex" flexFlow="column" gap="10px">
            {data &&
              Object.entries(data).map(([date, alarms]) => (
                <Box key={date}>
                  <Text fontSize="lg" fontWeight="bold" mb="10px">
                    {date}
                  </Text>
                  {alarms.map((alarm, index) => (
                    <AlarmData
                      key={index}
                      boolean={alarm.isRead}
                      url={alarm.notificationUrl}
                      type={alarm.notificationType}
                      partner={alarm.notificationSenderName}
                      count={alarm.count}
                    />
                  ))}
                </Box>
              ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Alarm;
