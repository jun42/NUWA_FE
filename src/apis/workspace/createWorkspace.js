import { request } from '../axios/axios'

export const createWorkspace = async(createWorkspaceData) => {
 const response = await request.post('/workspace', createWorkspaceData);
 return response.data
}