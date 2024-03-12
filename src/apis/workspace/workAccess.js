import axios from 'axios';
import { request } from '../axios/axios';

export const fetchWorkspace = async () => {
  try {
    const response = await request.get('/workspaces');
    if (response.data.status === 'success') {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('워크스페이스 정보 조회 중 오류 발생:', error);
    throw error;
  }
};
