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

export const getAlarms = async (workSpaceId, page = 0, size = 10, sortBy = "createdAt", sortOrder = "asc") => {
    try {
      const response = await request.get(`/notification/${workSpaceId}`, {
        params: {
          page,
          size,
          sortBy,
          sortOrder
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };