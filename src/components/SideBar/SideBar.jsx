import { useState } from 'react';
import add from '../../assets/add.svg';
import dashboard from '../../assets/dashboard.svg';
import dm from '../../assets/dm.svg';
import canvas from '../../assets/canvas.svg';
import file from '../../assets/file.svg';
import exclude from '../../assets/exclude.svg';
import todo from '../../assets/todo.svg';
import setting from '../../assets/setting.svg';
import group from '../../assets/user_group.svg';
import {
  Button,
  Flex,
  Box,
  Text,
  Image,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Avatar,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import UserInfo from './UserInfo';
import Channel from './Channel';
import WorkSpaceModalEdit from '@components/Modal/WorkspaceEdit';
import useModal from '@hooks/useModal';
import { useNavigate, useParams } from 'react-router-dom';
import { getWorkspace } from '@apis/sidebar/getworkspace.js';
import ChatChannel from './ChatChannel';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWorkspace } from '@apis/workspace/deleteWorkspace.js'; // 경로 확인 필요
const SideBar = () => {
  const navigate = useNavigate();
  const { workSpaceId } = useParams();
  const queryClient = useQueryClient();
  const chData2 = [
    {
      name: 'FE-회의실',
      chType: 'voice',
    },
    {
      name: 'BE-회의실',
      chType: 'voice',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useModal();

  const { data: response } = useQuery({
    queryKey: ['workspaces'],
    queryFn: getWorkspace,
    enabled: !!workSpaceId,
  });

  const workspaces = response?.data || [];

  const currentWorkspaceName =
    workspaces?.find(
      (workspace) => workspace.workspaceId.toString() === workSpaceId
    )?.workSpaceName || 'Loading...';

  // 삭제 로직을 처리하는 mutation
  const { mutate: deleteWorkspaceMutate } = useMutation({
    mutationFn: deleteWorkspace,
    onSuccess: () => {
      // 성공 시 워크스페이스 목록 쿼리 무효화 및 리디렉션
      queryClient.invalidateQueries(['workspaces']);
      navigate('/'); // 또는 원하는 대로 경로를 변경
    },
    onError: (error) => {
      // 에러 처리
      console.error('워크스페이스 삭제 실패:', error);
      alert('워크스페이스 삭제에 실패했습니다.');
    },
  });

  // '워크스페이스 나가기' 클릭 핸들러
  const handleLeaveWorkspace = () => {
    if (window.confirm('워크스페이스를 나가시겠습니까?')) {
      deleteWorkspaceMutate(workSpaceId);
    }
  };

  return (
    <Flex>
      <Box w="80px" backgroundColor="#5158ff" p="0 16px">
        {workspaces.map((workspace) => {
          return (
            <Flex
              key={workspace.workspaceId}
              justify="center"
              align="center"
              pt="32px"
              cursor="pointer"
              onClick={() => navigate(`/workspace/${workspace.workspaceId}`)}
            >
              <Avatar
                // boxSize="md"
                size={'md'}
                src={workspace.workSpaceImage}
                name={workspace.workSpaceName}
                border={`2px solid ${
                  workSpaceId === workspace.workspaceId.toString()
                    ? '#00FF00'
                    : '#D9D9D9'
                }`}
                _hover={{ transform: 'scale(1.04)' }}
              />
            </Flex>
          );
        })}
        <Flex
          justify="center"
          pt="32px"
          cursor={'pointer'}
          onClick={() => {
            navigate(`/create-workspace`);
          }}
          _active={{
            transform: 'scale(0.98)', // 클릭 시 약간 축소
          }}
          transition="transform 0.1s ease-in-out" // 변화가 부드럽게 적용되도록 설정
        >
          <Image src={add} alt="" />
        </Flex>
      </Box>
      <Box
        w="300px"
        backgroundColor="#f1f1f1"
        p="0 18px"
        overflowY={isOpen ? 'hidden' : 'scroll'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Flex flexDirection={'column'} justify={'center'} align={'center'}>
          <Flex
            align={'center'}
            justify={'center'}
            m="40px 20px 0"
            fontSize="20px"
            fontWeight="bold"
          >
            <Menu textAlign="center">
              <MenuButton
                as={Button}
                fontSize="20px"
                fontWeight="bold"
                backgroundColor="#f1f1f1"
              >
                {currentWorkspaceName}
              </MenuButton>
              <MenuList fontSize="16px">
                <MenuItem onClick={onEditModalOpen}>
                  워크스페이스 정보편집
                </MenuItem>
                <MenuItem onClick={handleLeaveWorkspace}>
                  워크스페이스 나가기
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <WorkSpaceModalEdit
            isOpen={isEditModalOpen}
            onClose={onEditModalClose}
            currentWorkspaceName={currentWorkspaceName}
          />
          <UserInfo />

          <Divider color="white" mt={'30px'} mb={'10px'} />
        </Flex>
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
                        전체 채널 조회
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
                        onClick={() => {
                          // navigate('adduser');
                        }}
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

          <ChatChannel type={'chat'} />

          <Channel type={'voice'} data={chData2} />
        </Box>
      </Box>
    </Flex>
  );
};

export default SideBar;
