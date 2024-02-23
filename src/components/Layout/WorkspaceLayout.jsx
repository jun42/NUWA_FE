import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import WorkspaceHeader from '@components/Header/WorkspaceHeader.jsx';
const WorkspaceLayout = () => {
  return (
    <Box h="100vh" overflowX="hidden">
      <WorkspaceHeader />
      <Flex h="calc(100% - 60px)">
        <SideBar />
        <Outlet />
      </Flex>
    </Box>
  );
};

export default WorkspaceLayout;
