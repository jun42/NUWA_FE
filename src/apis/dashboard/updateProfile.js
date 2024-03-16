import { request } from '../axios/axios';

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
