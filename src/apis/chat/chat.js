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

export const getDirectChatMessageList = (directChannelRoomId) =>
  request.get(`/message/direct/${directChannelRoomId}`);
