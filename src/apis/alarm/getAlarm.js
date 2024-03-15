import { request } from '@apis/axios/axios';

// export const getAlarm = async({workSpaceId, page, size, sortBy, sortOrder}) => {
// try{
//     const params =new URLSearchParams({page, size, sortBy, sortOrder});
//     const response = await request.get(`/notification/${workSpaceId}?${params}`);
//     console.log('알림 정보 조회에 성공 했습니다:', response.data);
//     return response.data;
// }catch (error) {
//     console.log('알림 조회 중 에러 발생:', error);
// }
// };

// export const getAlarms = (workSpaceId, page = 0, size = 10, sortBy = "createdAt", sortOrder = "asc") => {
//     return request.get(`/api/notification/${workSpaceId}`, {
//       params: {
//         page,
//         size,
//         sortBy,
//         sortOrder
//       }
//     });
//   };


// 알림 조회 API 로직을 별도의 함수로 정의
export const fetchAlarms = async (workSpaceId, { page = 0, size = 10, sortBy = 'createdAt', sortOrder = 'asc' }) => {
  try {
    const response = await request.get(`/notification/v2/${workSpaceId}`, {
      params: {
        page,
        size,
        sortBy,
        sortOrder,
      },
    });
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error('Error fetching alarms:', error);
    throw error; // 오류 발생 시 예외 처리
  }
};