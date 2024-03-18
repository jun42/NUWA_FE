import { request } from '../axios/axios';

export const getGroupChatMessage = (chatChannelRoomId, page = 0, size = 10) =>
  request.get(`/message/chat/${chatChannelRoomId}`, {
    params: {
      page,
      size,
    },
  });

export const disconnectGroupChatSocket = (roomId) =>
  request.post(`/channel/chat/${roomId}`);

export const removeGroupChat = (workSpaceId, roomId) =>
  request.delete(`/channel/chat/${workSpaceId}/message`, {
    params: {
      roomId,
    },
  });

export const joinInGroupChat = (chatChannelId, joinMemberIdList) =>
  request.post('/channel/chat/join', {
    chatChannelId,
    joinMemberIdList,
  });
