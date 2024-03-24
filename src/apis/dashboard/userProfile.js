import { request } from '../axios/axios';

export const userProfile = async (workSpaceId) => {
  try {
    const response = await request.get(`/workspace/${workSpaceId}/member`);
    return response.data;
  } catch (error) {
    console.error('프로필 정보를 불러올 수 없습니다.', error);
    throw error;
  }
};
