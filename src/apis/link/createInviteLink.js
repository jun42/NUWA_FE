import { request } from '../axios/axios';

/**
 * 워크스페이스 초대 링크를 생성합니다.
 * @param {number} workSpaceId 워크스페이스 ID
 * @returns {Promise} 생성된 초대 링크 정보를 담은 프로미스
 */
export const createInviteLink = async (workSpaceId) => {
  try {
    const response = await request.post('/api/invite', {
      workSpaceId: workSpaceId,
    });
    return response.data; // 생성된 초대 링크 정보와 메시지 등을 반환
  } catch (error) {
    console.error('초대 링크 생성 실패:', error);
    throw error;
  }
};
