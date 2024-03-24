import { Outlet, useLocation } from 'react-router-dom';
import { StSection } from '@components/Section/StSection';
import Step from '@components/Step/Step';
import { WORKERSPACE_STEP } from '@constants/workspace/WORKSPACE_STEP';
import CreateWorkspaceHeader from '@components/Header/CreateWorkspaceHeader.jsx';
import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';
const CreateWorkspace = () => {
  const pathName = useLocation().pathname;

  return (
    <StContainer>
      <CreateWorkspaceHeader />
      <StSection>
        <Flex flexFlow={'column'} width={'auto'}>
          <Step isStep={pathName} step={WORKERSPACE_STEP} />
          <Outlet />
        </Flex>
      </StSection>
    </StContainer>
  );
};

export default CreateWorkspace;

const StContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
