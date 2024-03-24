
import { request } from '@apis/axios/axios';

export const deleteCanvas = async ({ workSpaceId, canvasId }) => {
  const response = await request.delete(`/canvas/${workSpaceId}?canvasId=${canvasId}`);
  return response.data;
};