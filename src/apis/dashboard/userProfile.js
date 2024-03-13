import { request } from '../axios/axios';

export const userProfile = (workSpaceId) =>
  request.get(`/file/${workSpaceId}/member`);
