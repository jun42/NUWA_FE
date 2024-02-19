import workspace from '../../assets/WorkSpace.png';
import add from '../../assets/add.svg';
import profile from '../../assets/cham.png';
import active from '../../assets/active.svg';

import dashboard from '../../assets/dashboard.svg';
import dm from '../../assets/dm.svg';
import canvas from '../../assets/canvas.svg';
import file from '../../assets/file.svg';
import exclude from '../../assets/exclude.svg';

import arrowdown from '../../assets/arrowdown.svg';
import add_sm from '../../assets/add_sm.svg';

import chat_ch from '../../assets/chat_ch.svg';
import voice_ch from '../../assets/voice_ch.svg';

import {
  Button,
  IconButton,
  Flex,
  Box,
  Text,
  Avatar,
  Image,
  Divider,
} from '@chakra-ui/react';
import UserInfo from './UserInfo';
import CreateChannel from '../Channel/CreateChannelModal';
import Channel from './Channel';

const SideBar = () => {

  const chData = [
    {
      chName: 'FE-정보공유',
      chType: 'chat',
    },
    {
      chName: 'BE-정보공유',
      chType: 'chat',
    },
    {
      chName: 'UI-정보공유',
      chType: 'chat',
    },
    {
      chName: 'UI-정보공유',
      chType: 'chat',
    },
    {
      chName: 'UI-정보공유',
      chType: 'chat',
    },
  ];
  const chData2 = [
    {
      chName: 'FE-회의실',
      chType: 'voice',
    },
    {
      chName: 'BE-회의실',
      chType: 'voice',
    },
    {
      chName: 'UI-회의실',
      chType: 'voice',
    },
    {
      chName: 'UI-회의실',
      chType: 'voice',
    },
    {
      chName: 'UI-회의실',
      chType: 'voice',
    },
  ];

  return (
    <Flex>
      <Box w="80px" backgroundColor="#5158ff" p="0 16px">
        <Flex justify="center" pt="32px">
          <img src={workspace} alt="" />
        </Flex>
        <Flex justify="center" pt="32px">
          <img src={add} alt="" />
        </Flex>
      </Box>
      <Box
        w="327px"
        backgroundColor="#f1f1f1"
        p="0 18px"
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Text
          fontSize="20px"
          fontWeight="bold"
          textAlign="center"
          m="50px 20px 0"
        >
          NUWA_PROJECT
        </Text>
        <UserInfo />
        <Box>
          <Box mb="10px">
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={dashboard} alt="" w="20px" h="21px" mr="20px" />
              대쉬보드
            </Button>
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={dm} alt="" w="20px" h="21px" mr="20px" />
              다이렉트 메세지
            </Button>
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={canvas} alt="" w="20px" h="21px" mr="20px" />
              캔버스
            </Button>
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={file} alt="" w="20px" h="21px" mr="20px" />
              파일
            </Button>
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={exclude} alt="" w="20px" h="21px" mr="20px" />
              더보기
            </Button>
          </Box>

          <Divider color="white" />

          <Channel type={'chat'} data={chData}/>
          <Channel type={'voice'} data={chData2}/>

          
        </Box>
      </Box>
    </Flex>
  );
};

export default SideBar;
