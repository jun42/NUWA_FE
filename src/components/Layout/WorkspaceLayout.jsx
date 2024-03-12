import { Box, Flex, Spinner } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import WorkspaceHeader from '@components/Header/WorkspaceHeader.jsx';
import useAuthGuard from '@hooks/auth/useAuthGuard';
import { Fragment } from 'react';
import useWorkspaceMemberGuard from '../../hooks/auth/useWorkspaceMemberGuard';
const WorkspaceLayout = () => {
  const { isAuthChecked } = useAuthGuard();
  const { isMemberChecked } = useWorkspaceMemberGuard();

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
