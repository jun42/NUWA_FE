import { request } from '../axios/axios';

export const getWorkspaceUserProfile = (workSpaceId) =>
  request.get(`workspace/${workSpaceId}/member`);
