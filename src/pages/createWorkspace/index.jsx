import { Outlet, useLocation } from 'react-router-dom';
import { StSection } from '@components/Section/StSection';
import Step from '@components/Step/Step';
import { WORKERSPACE_STEP } from '@constants/workspace/WORKSPACE_STEP';
import CreateWorkspaceHeader from '@components/Header/CreateWorkspaceHeader.jsx';

const CreateWorkspace = () => {
  const pathName = useLocation().pathname;

  return (
    <>
      <CreateWorkspaceHeader />
      <StSection>
        <Step isStep={pathName} step={WORKERSPACE_STEP} />
        <Outlet />
      </StSection>
    </>
  );
};

export default CreateWorkspace;
