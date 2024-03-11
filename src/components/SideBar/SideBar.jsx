import { useEffect, useRef, useState } from 'react';
import workspace from '../../assets/WorkSpace.png';
import add from '../../assets/add.svg';
import profile from '../../assets/cham.png';
import active from '../../assets/active.svg';

import dashboard from '../../assets/dashboard.svg';
import dm from '../../assets/dm.svg';
import canvas from '../../assets/canvas.svg';
import file from '../../assets/file.svg';
import exclude from '../../assets/exclude.svg';
import todo from '../../assets/todo.svg';
import setting from '../../assets/setting.svg';
import group from '../../assets/user_group.svg';

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
  useOutsideClick,
  useDisclosure,
} from '@chakra-ui/react';
import UserInfo from './UserInfo';
import CreateChannel from '../Channel/CreateChannelModal';
import Channel from './Channel';
import WorkSpaceModalEdit from '@components/Modal/WorkspaceEdit';
import useModal from '@hooks/useModal';
import { useNavigate, useParams } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const { workSpaceId } = useParams();
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

  const [isOpen, setIsOpen] = useState(false);
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useModal();

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
        overflowY={isOpen ? 'hidden' : 'scroll'}
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
          cursor={'pointer'}
          onClick={onEditModalOpen}
        >
          NUWA_PROJECT
        </Text>
        <WorkSpaceModalEdit
          isOpen={isEditModalOpen}
          onClose={onEditModalClose}
        />
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
              onClick={() => {
                navigate(`/workspace/${workSpaceId}`);
              }}
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
              onClick={() => {
                navigate('chatboard');
              }}
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
              onClick={() => {
                navigate('canvas');
              }}
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
              onClick={() => {
                navigate('files');
              }}
            >
              <Image src={file} alt="" w="20px" h="21px" mr="20px" />
              파일
            </Button>
            <Box position="relative">
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <Image src={exclude} alt="" w="20px" h="21px" mr="20px" />
                더보기
              </Button>
              {isOpen && (
                <>
                  <Box
                    position="fixed"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    zIndex="99"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                  <Box w="100%" position="absolute" zIndex="100">
                    <Flex
                      flexDir="column"
                      w="100%"
                      zIndex="100"
                      backgroundColor="#D9D9D9"
                      borderRadius="md"
                    >
                      <Button
                        fontSize="14px"
                        fontWeight="500"
                        color="#656565"
                        w="100%"
                        justifyContent="flex-start"
                        backgroundColor="#D9D9D9"
                        onClick={() => {
                          navigate('findchannel');
                          setIsOpen(false);
                        }}
                      >
                        <Image
                          src={exclude}
                          alt=""
                          w="20px"
                          h="21px"
                          mr="20px"
                        />
                        전체 채널 조회 변경
                      </Button>
                      <Button
                        fontSize="14px"
                        fontWeight="500"
                        color="#656565"
                        w="100%"
                        justifyContent="flex-start"
                        backgroundColor="#D9D9D9"
                        onClick={() => {
                          navigate('todo');
                          setIsOpen(false);
                        }}
                      >
                        <Image src={todo} alt="" w="20px" h="21px" mr="20px" />
                        TODO 리스트
                      </Button>
                      <Button
                        fontSize="14px"
                        fontWeight="500"
                        color="#656565"
                        w="100%"
                        justifyContent="flex-start"
                        backgroundColor="#D9D9D9"
                      >
                        <Image
                          src={exclude}
                          alt=""
                          w="20px"
                          h="21px"
                          mr="20px"
                        />
                        칸반보드
                      </Button>
                      <Button
                        fontSize="14px"
                        fontWeight="500"
                        color="#656565"
                        w="100%"
                        justifyContent="flex-start"
                        backgroundColor="#D9D9D9"
                        onClick={() => {
                          navigate('adduser');
                          setIsOpen(false);
                        }}
                      >
                        <Image src={group} alt="" w="20px" h="21px" mr="20px" />
                        사용자 그룹 관리
                      </Button>
                      <Button
                        fontSize="14px"
                        fontWeight="500"
                        color="#656565"
                        w="100%"
                        justifyContent="flex-start"
                        backgroundColor="#D9D9D9"
                      >
                        <Image
                          src={setting}
                          alt=""
                          w="20px"
                          h="21px"
                          mr="20px"
                        />
                        환경설정
                      </Button>
                    </Flex>
                  </Box>
                </>
              )}
            </Box>
          </Box>

          <Divider color="white" />

          <Channel type={'chat'} data={chData} />
          <Channel type={'voice'} data={chData2} />
        </Box>
      </Box>
    </Flex>
  );
};

export default SideBar;
