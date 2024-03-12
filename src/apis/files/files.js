import { request } from '../axios/axios';
import { axiosImgInstance } from '../axios/axiosImage';

export const getAllFiles = ({ workSpaceId }) => {
  return request.get(`/file/${workSpaceId}`);
};

//zip pdf png jpg jpeg svg gif
export const getExtensionFiles = ({ workSpaceId, fileExtension }) => {
  return request.get(`/file/${workSpaceId}?fileExtension=${fileExtension}`);
};
//FILE IMAGE
export const getTypeFiles = ({ workSpaceId, fileType }) => {
  return request.get(`/file/${workSpaceId}?fileType=${fileType}`);
};
//createdAt, fileName, fileExtension, fileSize
export const getSortedFiles = ({ workSpaceId, sortBy, sortOrder }) => {
  const queryParams = `?sortBy=${sortBy}${
    sortOrder ? `&sortOrder=${sortOrder}` : ''
  }`;
  return request.get(`/file/${workSpaceId}${queryParams}`);
};
// export const uploadFiles = ({ workSpaceId, fileList }) =>
//   request.post(`/file/upload`, {
//     workSpaceId,
//     // channelId,
//     fileList,
//   });
// export const uploadFiles = ({ workSpaceId, channelId, fileList }) => {
//   try {
//     const response = request.post('/file/upload', {
//       workSpaceId,
//       channelId,
//       fileList,
//     });
//     return response;
//   } catch (error) {
//     console.error('e', error);
//   }
// };
