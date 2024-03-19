import { request } from '../axios/axios';

/**
 * @param {number} workSpaceId
 * @param {string[]} emailAddresses
 * @returns {Promise}
 */
export const inviteLink = async (workSpaceId, emailAddresses) => {
  try {
    const response = await request.post(
      '/invite/link',
      {
        workSpaceId,
        emailAddress: emailAddresses,
      },
      {
        timeout: 5000,
      }
    );
    return response.data;
  } catch (error) {
    console.error('초대 링크 생성 실패:', error);
    throw error; // 에러를 상위 호출자에게 전파
  }
};
