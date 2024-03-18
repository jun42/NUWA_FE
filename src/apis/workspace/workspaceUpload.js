import { axiosImgInstance } from '../axios/axiosImage';
import { request } from '../axios/axios';

export const workspaceUpload = async (data) => {
    const formData = new FormData()
    formData.append('img', data, 'image.jpg')
     const response = await axiosImgInstance.post('upload', formData);
     return response.data;
   };

   export const updateWorkspaceInfo = async (workSpaceId, workSpaceName, workSpaceImage) => {
    try {
      const response = await request.patch(`/workspace/${workSpaceId}`, {
        workSpaceName,
        workSpaceImage,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating workspace information: ", error);
      throw error;
    }
  };