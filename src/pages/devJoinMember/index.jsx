import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { request } from '../../apis/axios/axios';

const JoinMemberPage = () => {
  const [workspaceId, setWorkspaceId] = useState('');
  return (
    <>
      <label htmlFor="">워크스페이스 id</label>
      <input
        type="text"
        value={workspaceId}
        onChange={(e) => setWorkspaceId(e.target.value)}
      />
      <Button
        onClick={() => {
          request.post('/workspace/join', {
            workSpaceId: workspaceId,
            workSpaceMemberImage: 'test',
          });
        }}
      >
        참가
      </Button>
    </>
  );
};

export default JoinMemberPage;
