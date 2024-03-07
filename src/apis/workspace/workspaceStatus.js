import { request } from '../axios/axios';

export const workspaceStatus = async () => {
    try {
        const response = await request.patch(`/workspace/${workSpaceId}/member/status`,{params: {workspaceStatus,}})
        return response.data;
        } catch (error) {
            console.log(error);
        }
    
};
