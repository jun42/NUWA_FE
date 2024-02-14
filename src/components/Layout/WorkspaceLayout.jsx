import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import WorkspaceHeader from '../Header/WorkspaceHeader';
const WorkspaceLayout = () => {
  return (
    <>
      <WorkspaceHeader />
      <Flex>
        <SideBar />
        <Outlet />
      </Flex>
    </>
  );
};

export default WorkspaceLayout;
