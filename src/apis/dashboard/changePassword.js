import { request } from '../axios/axios';

export const changePassword = async (newPassword) => {
  try {
    const response = await request.patch(
      `/change?password=${encodeURIComponent(newPassword)}`
    );
    console.log(response.data.message);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
