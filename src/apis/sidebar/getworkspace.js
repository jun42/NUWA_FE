import { request } from '@apis/axios/axios';

export const getWorkspace = async() => {
    try{
    const response = await request.get('/workspaces');
    return response.data;
    }
    catch(error){
    console.log('에러가 도착했습니다:', error);
    }
}