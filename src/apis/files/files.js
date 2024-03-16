import { request } from '../axios/axios';
import { axiosImgInstance } from '../axios/axiosImage';

export const getAllFiles = ({ workSpaceId }) => {
  return request.get(`/file/${workSpaceId}?size=100`);
};

//zip pdf png jpg jpeg svg gif
export const getExtensionFiles = ({ workSpaceId, fileExtension }) => {
  return request.get(`/file/${workSpaceId}?fileExtension=${fileExtension}`);
};
//FILE IMAGE
export const getTypeFiles = ({ workSpaceId, fileUploadType }) => {
  return request.get(`/file/${workSpaceId}?fileUploadType=${fileUploadType}`);
};
//createdAt, fileName, fileExtension, fileSize
export const getSortedFiles = ({ workSpaceId, sortBy, sortOrder }) => {
  const queryParams = `?sortBy=${sortBy}${
    sortOrder ? `&sortOrder=${sortOrder}` : ''
  }`;
  return request.get(`/file/${workSpaceId}${queryParams}`);
};
export const getSearchedFiles = ({ workSpaceId, fileName }) => {
  console.log('fileName', fileName);
  const queryParams = `?fileName=${fileName}`;
  return request.get(`/file/search/${workSpaceId}${queryParams}`);
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
