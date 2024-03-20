import { request } from '../../apis/axios/axios';

export const changeMemberRole = async (
  workSpaceMemberId,
  workSpaceId,
  type
) => {
  try {
    const response = await request.patch(
      `/workspace/${workSpaceMemberId}/relocate`,
      null,
      {
        params: {
          workSpaceId,
          type,
        },
      }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || '권한 변경에 실패했습니다.',
    };
  }
};
