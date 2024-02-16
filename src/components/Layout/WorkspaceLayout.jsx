import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import WorkspaceHeader from '@components/Header/WorkspaceHeader.jsx';
const WorkspaceLayout = () => {
  return (
    <>
      <WorkspaceHeader />
      <Flex h="calc(100vh - 60px)">
        <SideBar />
        <Outlet />
      </Flex>
    </>
  );
};

export default WorkspaceLayout;
