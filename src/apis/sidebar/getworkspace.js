import { request } from '../axios/axios';

export const getWorkspace = async () => {
  const response = await request.get('/workspaces');
  return response.data;
};