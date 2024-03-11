import { request } from '../axios/axios';

export const getWorkSpaceMemberList = (workSpaceId) =>
  request.get(`workspace/${workSpaceId}/members`);

  export const getMyInfo = (workSpaceId) =>
  request.get(`workspace/${workSpaceId}/member`);
