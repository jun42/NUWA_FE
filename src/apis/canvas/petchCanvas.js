import { request } from '@apis/axios/axios'; 

export const updateCanvas = async ({ workSpaceId, canvasId, title, content }) => {
  const response = await request.post(`/canvas/${workSpaceId}?canvasId=${canvasId}`, {
    title,
    content,
  });
  return response.data;
};
