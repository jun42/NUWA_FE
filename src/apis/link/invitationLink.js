import { request } from '../axios/axios';

/**
 * 워크스페이스에 사용자를 초대하기 위한 링크를 생성합니다.
 * @param {number} workSpaceId 워크스페이스 ID
 * @param {string[]} emailAddresses 초대받을 이메일 주소 목록
 * @returns {Promise} AxiosResponse 데이터를 반환하는 프로미스
 */
export const inviteLink = async (workSpaceId, emailAddresses) => {
  try {
    const response = await request.post('/invite/link', {
      workSpaceId,
      emailAddress: emailAddresses,
    });
    return response.data; // 생성된 초대 링크 정보와 메세지 등을 반환
  } catch (error) {
    console.error('초대 링크 생성 실패:', error);
    throw error; // 에러를 상위 호출자에게 전파
  }
};
