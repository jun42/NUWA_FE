import { request } from '../axios/axios';

export const deleteWorkspace = async (workSpaceId) => {
  try {
    const response = await request.delete(`/workspace/${workSpaceId}`);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};