import { request } from '../axios/axios';

export const fetchCanvases = (workSpaceId) =>
  request.get(`/canvas/workspace/${workSpaceId}`);
