import { jwtDecode } from 'jwt-decode';
import { request } from '../axios/axios';
import { getToken } from '../../utils/auth';

export const joinInWorkSpace = (workSpaceId) => {
  const email = jwtDecode(getToken()).sub.split('@')[0];
  const body = {
    workSpaceId,
    workSpaceMemberImage: email,
  };

  return request.post('/workspace/join', body);
};
