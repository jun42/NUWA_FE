import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getWorkspaceUserProfile } from '../../apis/workspace/workspaceProfile';

const useWorkspaceMemberGuard = () => {
  const [isMemberChecked, setIsMemberChecked] = useState(false);
  const navigate = useNavigate();
  const { workSpaceId } = useParams();

  useEffect(() => {
    getWorkspaceUserProfile(workSpaceId)
      .then((r) => {
        setIsMemberChecked(true);
      })
      .catch((err) => {
        if (err.response.status) {
          alert('해당 워크스페이스의 멤버가 아닙니다.');
          navigate('/workAccess');
        }
      });
  }, []);

  return { isMemberChecked };
};

export default useWorkspaceMemberGuard;
