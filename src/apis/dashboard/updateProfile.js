import { request } from '../axios/axios';
import { uploadS3 } from '../axios/axiosImage';

export const uploadProfileImage = async (imageFile) => {
  try {
    const uploadResult = await uploadS3(imageFile);
    return uploadResult.Location;
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
    throw new Error('이미지 업로드에 실패했습니다.');
  }
};

export const updateProfile = async (workSpaceId, profileData) => {
  try {
    const response = await request.patch(
      `/workspace/${workSpaceId}/member`,
      profileData
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
