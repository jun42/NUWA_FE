import { Box, Flex, Spinner } from '@chakra-ui/react';
import { Outlet, useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import WorkspaceHeader from '@components/Header/WorkspaceHeader.jsx';
import useAuthGuard from '@hooks/auth/useAuthGuard';
import { Fragment, useEffect } from 'react';
import useWorkspaceMemberGuard from '@hooks/auth/useWorkspaceMemberGuard';
import { jwtDecode } from 'jwt-decode';
import { getToken } from '../../utils/auth';
const WorkspaceLayout = () => {
  const { isAuthChecked } = useAuthGuard();

  const { isMemberChecked } = useWorkspaceMemberGuard(isAuthChecked);
  //todo 401 handling

  const { workSpaceId } = useParams();
  const email = jwtDecode(getToken()).sub;

  useEffect(() => {
    const address = `${import.meta.env.VITE_SERVER_ADDRESS}/notification`;
    const params = `?email=${email}&workSpaceId=${workSpaceId}`;
    const eventSource = new EventSource(address + params);

    const testHandler = (e) => {
      console.log(e.data);
    };
    eventSource.addEventListener('sse', testHandler);

    eventSource.onmessage = function (event) {
      // 서버로부터 메시지 수신 시 콘솔에 출력
      console.log('Received message: ', event.data);
    };
    eventSource.onerror = function (error) {
      console.error('EventSource failed:', error);
    };

    return () => {
      eventSource.close();
    };
  }, []);
  return (
    <Fragment>
      {isAuthChecked && isMemberChecked ? (
        <Box h="100vh" overflowX="hidden">
          <WorkspaceHeader />
          <Flex h="calc(100% - 60px)">
            <SideBar />
            <Outlet />
          </Flex>
        </Box>
      ) : (
        <Flex
          h="100vh"
          overflowX="hidden"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Spinner
            thickness="10px"
            speed="0.5s"
            emptyColor="gray.200"
            color="secondary.500"
            width={'200px'}
            height={'200px'}
          />
        </Flex>
      )}
    </Fragment>
  );
};

export default WorkspaceLayout;
