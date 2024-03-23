import { request } from '@apis/axios/axios';

/**
 * 캔버스 조회 API 호출 함수
 * @param {number} workSpaceId - 워크스페이스 ID
 * @param {number} [workSpaceMemberId] - 워크스페이스 멤버 ID (선택적)
 * @param {number} [page=0] - 현재 페이지 번호 (기본값: 0)
 * @param {number} [size=10] - 페이지 당 아이템 개수 (기본값: 10)
 * @param {string} [sortBy='createdAt'] - 정렬 기준 (기본값: 'createdAt')
 * @param {string} [sortOrder='asc'] - 정렬 순서 (기본값: 'asc')
 * @returns {Promise<object>} API 응답 데이터
 */
export const fetchCanvas = async ({
  workSpaceId,
  workSpaceMemberId = '',
  page = 0,
  size = 10,
  sortBy = 'createdAt',
  sortOrder = 'asc'
}) => {
  const response = await request.get(`/canvas/${workSpaceId}`, {
    params: {
      workSpaceMemberId,
      page,
      size,
      sortBy,
      sortOrder
    }
  });

  return response.data;
};
