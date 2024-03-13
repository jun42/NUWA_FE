import { request } from '../axios/axios';

export const updateProfile = async (workSpaceId, profileData) => {
  try {
    const response = await request.patch(
      `/api/workspace/${workSpaceId}/member`,
      profileData
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
};
