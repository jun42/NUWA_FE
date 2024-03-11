import { request } from '../axios/axios';

// export const workspaceStatus = async () => {
//     try {
//         const response = await request.patch(`/workspace/${workSpaceId}/member/status`,{params: {workspaceStatus,}})
//         return response.data;
//         } catch (error) {
//             console.log(error);
//         }
    
// };


// 워크스페이스 멤버 상태를 편집하는 함수
// export const editWorkSpaceMemberStatus = async (workSpaceId, workSpaceMemberStatus) => {
//   try {
//     const response = await request.patch(`/api/workspace/${workSpaceId}/member/status?workSpaceMemberStatus=${workSpaceMemberStatus}`);
//     console.log(response.data);
//     // 응답 처리 로직
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default editWorkSpaceMemberStatus;

export const updateUserProfileStatus = async ({ workSpaceId, newStatus }) => {
    const response = await request.patch(`/workspace/${workSpaceId}/member/status?workSpaceMemberStatus=${newStatus}`);
    return response.data; // 서버로부터 받은 응답을 반환합니다.
  };