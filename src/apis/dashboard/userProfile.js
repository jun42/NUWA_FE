// import { request } from '../axios/axios';

// export const fetchUserProfile = async (workSpaceId) => {
//   try {
//     const response = await request.get(`/workspace/${workSpaceId}/member`);
//     if (response.data.status === 'success') {
//       return {
//         imageUrl:
//           response.data.data.image ||
//           'https://search.pstatic.net/sunny/?src=http%3A%2F%2Fthumbnail.10x10.co.kr%2Fwebimage%2Fimage%2Fadd2_600%2F141%2FA001410223_02.jpg%3Fcmd%3Dthumb%26w%3D500%26h%3D500%26fit%3Dtrue%26ws%3Dfalse', // 이미지가 없는 경우 대체 이미지 사용
//         name: response.data.data.name,
//         position: response.data.data.job,
//         email: response.data.data.email,
//         phone: response.data.data.phoneNumber,
//       };
//     } else {
//       throw new Error('프로필 정보를 불러올 수 없습니다.');
//     }
//   } catch (error) {
//     throw error;
//   }
// };
