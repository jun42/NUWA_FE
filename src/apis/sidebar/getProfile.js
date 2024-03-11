import { request } from '@apis/axios/axios';

export const getProfile = async (workSpaceId) => {
  const response = await request.get(`/workspace/${workSpaceId}/member`);
  return response.data;
};