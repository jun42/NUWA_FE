import { imgRequest } from '../axios/axios';

export const uploadFile = (fileType, channelId, body) => {
  return imgRequest.post(
    `/file/upload?fileType=${fileType}&channelId=${channelId}`,
    body
  );
};

export const uploadFileTest = (fileType, channelId, body, body2) => {
  return imgRequest.post(
    `/file/upload?fileType=${fileType}&channelId=${channelId}`,
    body,
    body2
  );
};

// {
// 	"workSpaceId" : 1,
// 	"channelId" : 1,
// 	"fileList" : [
// 			file1, file2
// 	]
// }

// fileList	multipart/form-data	멀티파트 폼 데이터
// fileRequestDto	application/json	폼 데이터
