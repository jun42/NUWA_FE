import { request } from '../axios/axios';

export const getTopFiles = (workSpaceId) =>
  request.get(`/file/${workSpaceId}/topseven`);
