import { request } from '../axios/axios';

export const getWorkSpaceMemberList = (workSpaceId) =>
  request.get(`workspace/${workSpaceId}/members`);
