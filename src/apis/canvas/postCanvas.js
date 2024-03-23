import { request } from '@apis/axios/axios';

// 캔버스 생성 API 호출 함수
export const createCanvas = async (workSpaceId, title, content) => {
    try {
      const response = await request.post(`/canvas/${workSpaceId}`, {
        title,
        content,
      });
      return { success: true, message: response.data.message };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response?.data.message || "캔버스 생성 중 오류가 발생했습니다." };
    }
  };
