import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
const WorkspaceLayout = () => {
  return (
    <>
      <h1>헤더</h1>
      <Flex>
        <SideBar />
        <Outlet />
      </Flex>
    </>
  );
};

export default WorkspaceLayout;
