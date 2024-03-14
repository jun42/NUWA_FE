// api/notificationApi.js
import { request } from './axiosInstance'; // axiosInstance 설정 파일의 경로에 맞게 조정

/**
 * 알림 읽음 처리 API
 * @param {number} notificationId 알림 ID
 * @returns Promise
 */
export const markNotificationAsRead = async (notificationId) => {
  try {
    const response = await request.patch(`/api/notification/read/${notificationId}`);
    return response.data; // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error('Error marking notification as read:', error);
    throw error; // 에러를 다시 던져 호출한 곳에서 처리할 수 있도록 함
  }
};