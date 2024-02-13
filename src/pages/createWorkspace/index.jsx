import { Outlet, useLocation } from 'react-router-dom';
import { StSection } from '@components/Section/StSection';
import Step from '@components/Step/Step';
import { WORKERSPACE_STEP } from '../../constants/workStep/WORKSPACE_STEP';

const CreateWorkspace = () => {
  const pathName = useLocation().pathname;
 
  return (
    <StSection>
      <Step isStep={pathName} step={WORKERSPACE_STEP}/>
      <Outlet />
    </StSection>
  );
};

export default CreateWorkspace;
