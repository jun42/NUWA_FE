import { request } from '@apis/axios/axios';

export const createDirectChatRoom = ({ workSpaceId, joinMemberId }) =>
  request.post('/channel/direct', { workSpaceId, joinMemberId });
