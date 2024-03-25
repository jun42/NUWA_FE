import { request } from '@apis/axios/axios';

export const createDirectChatRoom = ({ workSpaceId, joinMemberId }) =>
  request.post('/channel/direct', { workSpaceId, joinMemberId });

export const getDirectChatRoomList = (
  workSpaceId,
  page = 0,
  size = 10,
  sortBy = 'createdAt'
) => {
  return request.get(`/channel/direct/v2/${workSpaceId}`, {
    params: {
      page,
      size,
      sortBy,
    },
  });
};

export const searchDirectChatRoomList = (
  workSpaceId,
  workSpaceMemberName = '',
  page = 0,
  size = 10,
  sortBy = 'createdAt'
) => {
  return request.get(`/channel/direct/search/${workSpaceId}`, {
    params: {
      page,
      size,
      sortBy,
      workSpaceMemberName,
    },
  });
};

export const getDirectChatMessageList = (
  directChannelRoomId,
  page = 0,
  size = 20,
  sortBy = 'createdAt',
  sortOrder = 'asc'
) =>
  request.get(
    `/message/direct/${directChannelRoomId}?page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`
  );

export const disconnectDirectChatSocket = (roomId) => {
  return request.post(`/channel/direct/${roomId}`);
};

export const getDirectChatRoomInfo = (workSpaceId, directChannelRoomId) => {
  return request.get(
    `/channel/direct/info/${workSpaceId}?directChannelRoomId=${directChannelRoomId}`
  );
};

export const leaveDirectChatRoom = (workSpaceId, roomId) => {
  return request.delete(`/channel/direct/${workSpaceId}/message`, {
    params: {
      roomId,
    },
  });
};
