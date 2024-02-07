import { Outlet } from 'react-router-dom';
import { StSection } from '@components/Section/StSection';

const CreateWorkspace = () => {
  return (
    <StSection>
      <Outlet />
    </StSection>
  );
};

export default CreateWorkspace;
