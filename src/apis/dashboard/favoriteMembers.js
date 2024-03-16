import { request } from '../axios/axios';

export const favoriteMembers = (workSpaceId) =>
  request.get(`/workspace/${workSpaceId}/favorite`);
