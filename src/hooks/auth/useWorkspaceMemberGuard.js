import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getWorkspaceUserProfile } from '../../apis/workspace/workspaceProfile';

const useWorkspaceMemberGuard = ({ isAuthChecked }) => {
  const [isMemberChecked, setIsMemberChecked] = useState(false);
  const navigate = useNavigate();
  const { workSpaceId } = useParams();

  useEffect(() => {
    if (isAuthChecked) {
      getWorkspaceUserProfile(workSpaceId)
        .then((r) => {
          setIsMemberChecked(true);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            alert('해당 워크스페이스의 멤버가 아닙니다.');
            navigate('/workAccess');
          }
        });
    }
  }, [isAuthChecked]);

  return { isMemberChecked };
};

export default useWorkspaceMemberGuard;
