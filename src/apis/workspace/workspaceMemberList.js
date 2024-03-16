import { request } from '../axios/axios';

export const workspaceMemberList = async (workSpaceId) => {
  try {
    const response = await request.get(`/workspace/${workSpaceId}/members`);
    return response.data; // 이 데이터를 UI에 표시
  } catch (error) {
    // 오류 처리
    console.error(error);
    return null;
  }
};
