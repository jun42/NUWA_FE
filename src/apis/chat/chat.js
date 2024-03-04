import { request } from '@apis/axios/axios';

export const createDirectChatRoom = ({ workSpaceId, joinMemberId }) =>
  request.post('/channel/direct', { workSpaceId, joinMemberId });

export const getDirectChatRoomList = ({ workSpaceId }) => {
  return request.get(`/channel/direct/v2/${workSpaceId}`);
};

export const getDirectChatMessageList = (directChannelRoomId) =>
  request.get(`/message/direct/${directChannelRoomId}`);
