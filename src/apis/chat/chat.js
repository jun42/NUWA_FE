import { request } from '@apis/axios/axios';

export const createDirectChatRoom = ({ workSpaceId, joinMemberId }) =>
  request.post('/channel/direct', { workSpaceId, joinMemberId });

export const getDirectChatRoomList = (
  workSpaceId,
  page = 0,
  size = 10,
  sortBy = 'createdAt'
) => {
  return request.get(
    `/channel/direct/v2/${workSpaceId}?page=${page}&size=${size}&sortBy=${sortBy}`
  );
};

export const getDirectChatMessageList = (
  directChannelRoomId,
  page = 0,
  size = 15,
  sortBy = 'createdAt',
  sortOrder = 'asc'
) =>
  request.get(
    `/message/direct/${directChannelRoomId}?page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`
  );

export const disconnectDirectChatSocket = (roomId) => {
  return request.post(`/channel/direct/${roomId}`);
};
