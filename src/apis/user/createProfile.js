import { axiosImgInstance } from '../axios/axiosImage';

export const createProfile = async (data) => {
 const formData = new FormData()
 formData.append('img', data, 'image.jpg')
  const response = await axiosImgInstance.post('upload', formData);
  return response.data;
};
