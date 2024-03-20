import { request } from '../axios/axios';

/**
 * @param {number} workSpaceId
 * @returns {Promise}
 */
export const createInviteLink = async (workSpaceId) => {
  try {
    const response = await request.post('/invite', {
      workSpaceId: workSpaceId,
    });
    return response.data;
  } catch (error) {
    console.error('초대 링크 생성 실패:', error);
    throw error;
  }
};
