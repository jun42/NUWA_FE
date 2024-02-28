import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { request } from '../../apis/axios/axios';

const JoinMemberPage = () => {
  const [workSpaceId, setWorkSpaceId] = useState('');
  return (
    <>
      <label htmlFor="">워크스페이스 id</label>
      <input
        type="text"
        value={workSpaceId}
        onChange={(e) => setWorkSpaceId(e.target.value)}
      />
      <Button
        onClick={() => {
          request.post('/workspace/join', {
            workSpaceId: workSpaceId,
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
