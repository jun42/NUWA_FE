import { request } from '../axios/axios';

export const createWorkspace = async (createWorkspaceData) => {
  try {
    const response = await request.post('/workspace', createWorkspaceData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
